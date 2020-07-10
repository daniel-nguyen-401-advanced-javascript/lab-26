import {useState} from 'react';

// forms will
// - update vals
// -- key/val for obj that contains all form data
// - submit vals

function useForm(callback, initData) {
  const [formData, setFormData] = useState(initData || {});

  function updateForm(key, value) {
    let newFormData = {...formData};
    newFormData[key] = value;

    setFormData(newFormData);
  }

  function submitForm(e) {
    e.preventDefault();

    callback(formData);
  }

  return [updateForm, submitForm, formData];
}

export default useForm;