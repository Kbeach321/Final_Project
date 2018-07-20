// import React, { Component } from 'react';
//
// import './Games.css';
//
// class Games extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//
//       <div className="container">
//     <div className="row">
//       <div className="col header_left"> <span> Etsy Recreation </span> </div>
//       <div className="col header"> Header Filler</div>
//     </div>
//     <div className="row shell">
//       <div className="col-3 menu">
//         <div className="col-12 categories"><span> All categories </span>
//           <div className="col-10 offset-1 clickables-">
//             <span><a href="#"> Craft Supplies & Tools </a></span>
//             <span><a href="#"> Accessories </a></span>
//             <span><a href="#"> Home & Living </a></span>
//             <span><a href="#"> Clothing </a></span>
//           </div>
//         </div>
//         <div className="col-12 shipping"><span> Shipping </span>
//           <div className="col-10 offset-1 clickables-">
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Free Shipping</label>
//             </div>
//             <!-- Check Box 2 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Ready to ship 1 buisness day</label>
//             </div>
//             <!-- Check Box 3 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Ready to ship in 3 business days</label>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 shipping"><span> Special offers </span>
//           <div className="col-10 offset-1 clickables-">
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">On Sale</label>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 shipping"><span> Shop location </span>
//           <div className="col-10 offset-1 clickables-">
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Anywhere</label>
//             </div>
//             <!-- Check Box 2 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">United States</label>
//             </div>
//             <!-- Check Box 3 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Customs</label>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 shipping"><span> Item type </span>
//           <div className="col-10 offset-1 clickables-">
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">All Items</label>
//             </div>
//             <!-- Check Box 2 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Handmade</label>
//             </div>
//             <!-- Check Box 3 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Vintage</label>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 shipping"><span> Price ($) </span>
//           <div className="col-10 offset-1 clickables-">
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Any price</label>
//             </div>
//             <!-- Check Box 2 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Under $25</label>
//             </div>
//             <!-- Check Box 3 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">$25 to $50</label>
//             </div>
//             <!-- Check Box 4 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">$50 to $100</label>
//             </div>
//             <!-- Check Box 5 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Over $100</label>
//             </div>
//             <!-- Check Box 6 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Custom</label>
//             </div>
//           </div>
//         </div>
//         <div className="col-12 shipping"><span> Ordering options </span>
//           <div className="col-10 offset-1 clickables-">
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Accepts Etsy gift cards</label>
//             </div>
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Customizable</label>
//             </div>
//             <!-- Check Box 1 -->
//             <div className="custom-control custom-checkbox">
//               <input type="checkbox" className="custom-control-input">
//               <label className="custom-control-label" for="defaultUnchecked">Can be gift wrapped</label>
//             </div>
//           </div>
//         </div>
//
//       </div>
//
//       <div className="col-8 offset-1 itembox">
//         <div className="row items"></div>
//       </div>
//     </div>
//
//     );
//
//
// export default Games;
