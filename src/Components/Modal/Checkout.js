import React, { useRef } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import ReactToPrint from "react-to-print";

function ModalOut(props) {
  const componentRef = useRef();

  return (
    <>
      <Modal show={props.keys} onHide={props.keyClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={componentRef}>
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {props.datas.map(data => (
                  <tr>
                    <td>1</td>
                    <td>{data.title}</td>
                    <td>
                      Rp.
                      {data.price.toLocaleString(navigator.language, {
                        minimumFractionDigits: 0
                      })}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td colSpan="2" className="text-right">
                    Rp.
                    {props.total.toLocaleString(navigator.language, {
                      minimumFractionDigits: 0
                    })}
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          <ReactToPrint
            trigger={() => (
              <Button variant="danger" className="float-right">
                Checkout
              </Button>
            )}
            content={() => componentRef.current}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.keyClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalOut;
