import React from 'react';
import Navbar from './Navbar';

const Account = ({ account, user }) => {
  const { account_name, balance, id } = account
  return(
    <>
      <Navbar />
      <h1>{account_name}</h1>
      <p>${balance}</p>
      <a href={`/accounts/${id}/edit`}>Edit</a>
      <br />
      <a href={`/accounts/${id}`} data-method="delete">Delete</a>

      {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

      <div id="modal1" class="modal">
      <div className="modal-content">
      <h4>Are you sure you want to delete this account?</h4>
      <p>This cannot be undone.</p>
      </div>
      <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">No</a>
      </div>
      </div> */}
    </>
  )
}

export default Account;