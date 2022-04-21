### Buttons
    <button className="button button-primary">button primary</button> &nbsp; &nbsp;
    <button className="button button-secondary ">button secondary</button>&nbsp; &nbsp;
    <button className="button button-tertiary">button-tertiary</button>
### Input 
    <div className="input-field-container">
           <Form.Label>Email address</Form.Label>
           <div className="input-validate">
               <Form.Control type="email" className="error" placeholder="Enter email" />
               <div className="help-text">
                   <p>correct enter</p>
               </div>
           </div>
    </div>
Change Form.Control class name based on validation (success or error or empty)
### Tabs
Don't forget to add parent div with class 'tabs-container' to react bootstrap tabs.
####Example
    <div className="tabs-container">
        <Tabs/>
    </div>
### Input field with dropdown 
    <div className="input-field-container">
       <div className="dropdown-input initial-child">
           <Dropdown onSelect={handleSelect}>
               <Dropdown.Toggle id="dropdown-basic">
                   <img src={xprt} className="logo" alt="cc"/>
                   {selectedToken}
                    <img src={close} className="icon-arrow" alt="cc"/>
               </Dropdown.Toggle>
               <Dropdown.Menu>
                   <div className="search-input">
                       <input
                           type="text"
                           onChange={handleSearch}
                           placeholder="search for a token"
                       />
                       <img src={close} className="icon-search" alt="cc"/>
                   </div>
                   <div className="dropdown-list">
                       {
                           tokenList.map((item, index) => (
                               <Dropdown.Item eventKey={item.name}>{item.name}{item.balance}</Dropdown.Item>
                           ))
                       }
                   </div>
               </Dropdown.Menu>
           </Dropdown>
           <div className="input-section">
               <input
                   type="number"
                   placeholder="0.00"
               />
               <p className="dollar-amount">0.00 </p>
           </div>
       </div>
    </div>

### Notification Toasts

We are using react-toastify library for notifications.

    const BroadCastMsg = () => (
        <div className="toast-content">
            <div className="title-section">
            <Spinner animation="border" variant="light" className="toast-icon"/>
            <p className="title">Transaction Broadcasting</p>
            </div>
            <p className="content">Waiting for transaction to be included in the block</p>
        </div>
    )
     toast(<BroadCastMsg />)
Change the spinner to info or warning or error icon based on requirement.

###Modal
    
    <Modal show={show}  className="modal-container" onHide={handleClose}>
           <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>
           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    </Modal>

### Cards
     <div className="card-container">
           <div className="card card-primary">
               <div className="card-body">
                   <p>Currently viewing balances on Persistence Mainnet</p>
               </div>
           </div>
    </div>
    <div className="card-container">
           <div className="card card-secondary">
               <div className="card-body">
                   <p>Currently viewing balances on Persistence Mainnet</p>
               </div>
           </div>
    </div>

### Typography

##### Headings
Add heading1, heading2 etc classNames to default Heading tags to override the default styles .

    <p className="title">Headings </p>
    <h1 className="heading1">hei thissdf</h1>
    <h2 className="heading2">hei thissdf</h2>
    <h3 className="heading3">hei thissdf</h3>
    <h4 className="heading4">hei thissdf</h4>
    <h5 className="heading5">hei thissdf</h5>
    <h6 className="heading6">hei thissdf</h6>

### Slider 
 
We are using react-rangeslider npm.

    import Slider from 'react-rangeslider';
    import 'react-rangeslider/lib/index.css'
    <div className="range-slider">
        <Slider
            value={rangeValue}
            onChange={handleSliderChange}
            min={0}
            max={2000000}
            step={100}
        />
    </div>

### Toggle 

      <Form.Check
            type="switch"
            id="custom-switch"
            label="Check this switch"
        />

