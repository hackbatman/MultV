import React from 'react'
import '../modal/modal.css'

const modal = ({ brand, children, isOpen, closeModal }) => {

    return (
        <div>
            <div className={`modal modalito  ${isOpen && 'is-open'} `}>
                <div className='modal-container'>
                    <div className='modal-header m-0'>
                        <div className='modal-title fs-5'>{brand}</div>
                        <button className='btn-close fs-5' onClick={closeModal}></button>
                    </div>
                    <div className='modal-body'>
                        {children}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default modal
