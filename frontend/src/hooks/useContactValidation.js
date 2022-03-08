import { useState, useEffect } from 'react'
import { navigate } from 'gatsby'

const useFormValidation = (initialState, validation) => {
  // formの各値を保存
  const [values, setValues] = useState(initialState)
  // formの各値がonChange eventで変更済がどうか、つまり一度でも入力されたかどうか
  const [touched, setTouched] = useState({})
  // touchedされた後、一度でもvalidatedされたかどうか
  const [validated, setValidated] = useState({})
  // validation errorsを格納
  const [errors, setErrors] = useState({})
  // onSubmitでloading trueにした後、useEffect hookでformを送信できるかどうかcheck
  const [loading, setLoading] = useState(false)

  // validation errorなし、かつ、すべてのform値がtouchedならform送信、loadingをfalseに
  useEffect(() => {
    if (loading) {
      const noErrors = Object.keys(errors).length === 0
      const allTouched = Object.keys(touched).length === 3
      if (noErrors && allTouched) {
        let form = document.querySelector("form[data-netlify='true']")
        fetch('/', {
          method: 'post',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...values,
          }),
        })
          .then(() => {
            // 全stateを初期化
            setValues(initialState)
            setTouched({})
            setValidated({})
            setErrors({})
            setLoading(false)
            navigate('/contacts?success=true')
          })
          .catch(error => alert(error))
      } else {
        // errorありで、loadingだけfalseに
        setLoading(false)
      }
    }
  }, [touched, errors, loading, values, initialState])

  const handleChange = event => {
    // eventはevent callbackが終わるとperformanceのためにnullにされるのでsetValuesのように非同期的にaccessしようとするとerrorとなるので、非同期でaccessする時はevent.persist()を使用
    event.persist()
    setValues(prev => ({
      ...prev,
      // ES6 Computed Property Name
      [event.target.name]: event.target.value,
    }))
    setTouched(prev => ({
      ...prev,
      [event.target.name]: true,
    }))
  }

  const handleBlur = event => {
    event.persist()
    const validationErrors = validation(values)
    // ex. errors, touchedの構造
    // errors = {
    //   name: "sajskajskajskajk",
    //   email: "sajksjaksjaksjak",
    // }
    // touched = {
    //   email: true,
    // }
    // touched objectのkeyから配列を作成: Object.keys(touched)
    // その配列からobjectを作成、初期値を{}にするのがpoint: .reduce((acc,cur,index)=>{}, {})
    const errors = Object.keys(touched).reduce((acc, cur, index) => {
      // loop中のkeyがerrorsになければ何もしない
      if (!validationErrors[cur]) {
        return acc
      }
      // loop中のkeyがtouchedされていれば、そのvalueを有効なerrorとして追加、untouchedならerrorとして追加しない
      if (touched[cur]) {
        acc[cur] = validationErrors[cur]
        return acc
      }
    }, {})
    setErrors(errors)
    setValidatedWhenAllTouched(event)
  }

  const handleSubmit = event => {
    event.persist()
    event.preventDefault()
    const validationErrors = validation(values)
    setErrors(validationErrors)
    // submitで全fieldをtouch
    setTouched({ name: true, email: true, message: true })
    setValidatedWhenAllTouched(event)
    setLoading(true)
  }

  const setValidatedWhenAllTouched = event => {
    if (touched[event.target.name]) {
      setValidated(prev => ({
        ...prev,
        [event.target.name]: true,
      }))
    }
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  return {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    touched,
    validated,
    errors,
    loading,
  }
}

export default useFormValidation
