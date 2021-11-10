import React  from "react";


// export default function About(props) {
   
   


//   return (
//     <div className="container" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} >
//     <h1>About Us</h1>
//       <div className="accordion" id="accordionPanelsStayOpenExample">
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="panelsStayOpen-headingOne">
//             <button
//               className="accordion-button"
//               type="button"
//               style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} 
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseOne"
//               aria-expanded="true"
//               aria-controls="panelsStayOpen-collapseOne"
//             >
//               Accordion Item #1
//             </button>
//           </h2>
//           <div
//             id="panelsStayOpen-collapseOne"
//             className="accordion-collapse collapse show"
//             style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} 
//             aria-labelledby="panelsStayOpen-headingOne"
//           >
//             <div className="accordion-body">
//               <strong>This is the first item's accordion body.</strong> It is
//               shown by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
//             <button
//               className="accordion-button collapsed"
//               style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} 
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseTwo"
//               aria-expanded="false"
//               aria-controls="panelsStayOpen-collapseTwo"
//             >
//               Accordion Item #2
//             </button>
//           </h2>
//           <div
//           style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} 
//             id="panelsStayOpen-collapseTwo"
//             className="accordion-collapse collapse"
//             aria-labelledby="panelsStayOpen-headingTwo"
//           >
//             <div className="accordion-body">
//               <strong>This is the second item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="panelsStayOpen-headingThree">
//             <button
//               className="accordion-button collapsed"
//               type="button"
//               style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} 
//               data-bs-toggle="collapse"
//               data-bs-target="#panelsStayOpen-collapseThree"
//               aria-expanded="false"
//               aria-controls="panelsStayOpen-collapseThree"
//             >
//               Accordion Item #3
//             </button>
//           </h2>
//           <div
//           style={{backgroundColor: props.mode === 'dark' ? 'grey':'white' , color: props.mode === 'dark' ? 'white':'black'}} 
//             id="panelsStayOpen-collapseThree"
//             className="accordion-collapse collapse"
//             aria-labelledby="panelsStayOpen-headingThree"
//           >
//             <div className="accordion-body">
//               <strong>This is the third item's accordion body.</strong> It is
//               hidden by default, until the collapse plugin adds the appropriate
//               classNamees that we use to style each element. These classNamees
//               control the overall appearance, as well as the showing and hiding
//               via CSS transitions. You can modify any of this with custom CSS or
//               overriding our default variables. It's also worth noting that just
//               about any HTML can go within the <code>.accordion-body</code>,
//               though the transition does limit overflow.
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }


// import React , {useState}from "react";


export default function About(props) {
   
   
let mystyle = {
            color: props.mode === "light" ? "grey" : "white",
            backgroundColor: props.mode === "light" ? "white" : "grey",
            // backgroundColor: props.mode === 'dark' ? 'grey':'white'
        }


  return (
      <div>
    <div className="container" style = {mystyle}>
    <h1>About Us</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              style = {mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            style = {mystyle}
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              style = {mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
          style = {mystyle}
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style = {mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
          style = {mystyle}
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        </div>
    </div>
</div>
  );
}
