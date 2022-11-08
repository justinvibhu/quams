import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";

export default function Admin() {
  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Empid</th>
          <th scope="col">Name</th>
          <th scope="col">contact</th>
          <th scope="col">certificate</th>
          <th scope="col">Score</th>
          <th scope="col">leave </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="fw-bold mb-1">12345</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">ABC</p>
          </td>
          <td>799455616</td>
          <td>Senior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              2002
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="fw-bold mb-1">12454</p>
              </div>
            </div>
          </td>
          <td>
            <p className="fw-normal mb-1">qaxa</p>
          </td>
          <td>799455616</td>
          <td>Junior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              2000
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className="d-flex align-items-center">
              <div className="ms-3">
                <p className="fw-bold mb-1">12345</p>
              </div>
            </div>
          </td>
          <td>
            <p className="text-muted mb-0">UI</p>
          </td>
          <td>
            <td>799455616</td>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              2300
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color="link" rounded size="sm">
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}




// // //Calling Bootstrap 4.5 css
// // import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// //Calling Firebase config setting to call the data
// import '../../firebase';


// class Admin extends React.Component {

// constructor(props) {
    
//     super(props);
   
//     this.state = {employeeslist : []}
//     }
    
//   componentDidMount() {
   
   
     
//       firebase.database().ref("https://qudient-employee-default-rtdb.firebaseio.com/EmpLeaveDataRecords.json").on("value", snapshot => {
//         let employeeslist = [];
//         snapshot.forEach(snap => {
//             // snap.val() is the dictionary with all your keys/values from the 'students-list' path
//             employeesslist.push(snap.val());
//         });
//         this.setState({ employeeslist: employeeslist });
//       });
    
    
//  }
  
// //   render(){
// //   return (
// //     <div className="MainDiv">
// //       <div class="jumbotron text-center bg-sky">
// //           <h3>How to show firebase data in reactjs?</h3>
// //       </div>
    
// //       <div className="container">
// //           <table id="example" class="display table">
// //             <thead class="thead-dark">
// //                 <tr>
// //                     <th>FirstName</th>
// //                     <th>Lastname</th>
// //                     <th>Email</th>
// //                     <th>Mobile</th>
// //                 </tr>
// //             </thead>
// //             <tbody>
// //             {this.state.studentslist.map(data => {
                
// //                 return (
// //                     <tr>     
// //                     <td>{data.firstName}</td>
// //                     <td>{data.lastName}</td>
// //                     <td>{data.email}</td>
// //                     <td>{data.mobileNumber}</td>
// //                     </tr>
                    
// //                 );
               
// //                 })}
        
               
// //             </tbody>
            
// //          </table>
          
// //      </div>
// //     </div>
// //   );
// // }
// // }
// // export default Admin;