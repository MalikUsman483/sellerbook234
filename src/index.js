import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import banana from './books'
// import Books from './Book
import Book from './Book'

function BookList() {
  return (
    <>
    <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {banana.map((book, inde) => {
          //  console.log('first', {inde})
          return <Book {...book} key={book.id} number={inde} />
        })}
      </section>
    </>
  )
}
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// const YourFormComponent = () => {
//   const formik = useFormik({
//     initialValues: {
//       Work_Experience_sub: [
//         {
//           date_from: '',
//           fT_PT: '',
//           post_held: '',
//           rOrganisation_nam: '',
//           brief_description: '',
//         },
//       ],
//     },
//     validationSchema: Yup.object({
//       Work_Experience_sub: Yup.array().of(
//         Yup.object().shape({
//           date_from: Yup.string().required('Date From is required'),
//           fT_PT: Yup.string().required('FT/PT is required'),
//           post_held: Yup.string().required('Post Held is required'),
//           rOrganisation_nam: Yup.string().required(
//             'Organisation Name is required'
//           ),
//           brief_description: Yup.string().required(
//             'Brief Description is required'
//           ),
//         })
//       ),
//     }),
//     onSubmit: (values) => {
//       console.log(values)
//       // Handle form submission logic here
//     },
//   })

//   const handleAddRow = () => {
//     formik.setFieldValue('Work_Experience_sub', [
//       ...formik.values.Work_Experience_sub,
//       {
//         date_from: '',
//         fT_PT: '',
//         post_held: '',
//         rOrganisation_nam: '',
//         brief_description: '',
//       },
//     ])
//   }

//   const handleDeleteRow = (index) => {
//     const updatedRows = [...formik.values.Work_Experience_sub]
//     updatedRows.splice(index, 1)
//     formik.setFieldValue('Work_Experience_sub', updatedRows)
//   }

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       {formik.values.Work_Experience_sub.map((item, index) => (
//         <div className="form-row" key={index}>
//           <div className="form-group col-lg-3">
//             <input
//               type="date"
//               name={`Work_Experience_sub[${index}].date_from`}
//               className={`form-control ${
//                 formik.errors.Work_Experience_sub?.[index]?.date_from
//                   ? 'is-invalid'
//                   : 'is-valid'
//               }`}
//               value={item.date_from}
//               onChange={(e) =>
//                 formik.setFieldValue(
//                   `Work_Experience_sub[${index}].date_from`,
//                   e.target.value
//                 )
//               }
//             />
//           </div>
//           <div className="form-group col-lg-3">
//             <input
//               type="text"
//               name={`Work_Experience_sub[${index}].fT_PT`}
//               className={`form-control ${
//                 formik.errors.Work_Experience_sub?.[index]?.fT_PT
//                   ? 'is-invalid'
//                   : 'is-valid'
//               }`}
//               value={item.fT_PT}
//               onChange={(e) =>
//                 formik.setFieldValue(
//                   `Work_Experience_sub[${index}].fT_PT`,
//                   e.target.value
//                 )
//               }
//             />
//           </div>
//           <div className="form-group col-lg-3">
//             <input
//               type="text"
//               name={`Work_Experience_sub[${index}].post_held`}
//               className={`form-control ${
//                 formik.errors.Work_Experience_sub?.[index]?.post_held
//                   ? 'is-invalid'
//                   : 'is-valid'
//               }`}
//               value={item.post_held}
//               onChange={(e) =>
//                 formik.setFieldValue(
//                   `Work_Experience_sub[${index}].post_held`,
//                   e.target.value
//                 )
//               }
//             />
//           </div>
//           <div className="form-group col-lg-4">
//             <input
//               type="text"
//               name={`Work_Experience_sub[${index}].rOrganisation_nam`}
//               className={`form-control ${
//                 formik.errors.Work_Experience_sub?.[index]?.rOrganisation_nam
//                   ? 'is-invalid'
//                   : 'is-valid'
//               }`}
//               value={item.rOrganisation_nam}
//               onChange={(e) =>
//                 formik.setFieldValue(
//                   `Work_Experience_sub[${index}].rOrganisation_nam`,
//                   e.target.value
//                 )
//               }
//             />
//           </div>
//           <div className="form-group col-lg-2">
//             <button type="button" onClick={() => handleDeleteRow(index)}>
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}

//       <div className="form-row">
//         <div className="form-group col-lg-2">
//           <button type="button" onClick={handleAddRow}>
//             Add Row
//           </button>
//         </div>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   )
// }

export default BookList

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
