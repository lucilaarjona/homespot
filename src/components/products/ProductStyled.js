import styled from "styled-components";
export const ProductStyled = styled.section`
justify-content:center;
align-items: center;
.productList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.cardProduct{
  display: flex;
  flex-direction: column;
  width: 362px;
  height: 461px;
  position: relative;
  align-items: center;
  margin: 20px 0 0 0;
  border: 1px solid #DFE4EA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
}
.imgProduct{
  height: 231px;
  width: 100%;
  border-radius: 8px 8px 0 0;
}
.caption{
  margin: 10px;
}
.category{
  font-weight: lighter;
  font-size: 14px;
  font-family: Quicksand;
}

.stars{
  margin-left: 5px;
  font-size: 13px;
  color:rgb(34,195,155);
  color: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
}
.title{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}
.ubication{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.location{
  margin-left:5px;
}
.iconLocation{
  font-size:13px;
  color: #545776;
}

.icons{
  visibility: hidden;
}
.map{
  color: #1DBEB4;
}
.description{
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  line-height: 16.41px;
  max-height: 65px;
}
.verMas{
  width: 100%;
  height: 40px;
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: none;
}
@media (min-width:768px) {
  .productList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
  .cardProduct{
    display: flex;
    flex-direction: row;
    width: 710px;
    height: 279px;
    align-items: center;
    margin: 20px 0 0 0;
    border: 1px solid #DFE4EA;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .imgProduct{
    height: auto;
    width: auto;
    max-width:372px;
    max-height: 348px;
    min-width: 372px;
    object-fit: contain;
    border-radius: 8px 0px 0 0;
  }
  .title{
    max-height: 24px
  }
  .iconLocation{
  font-size:13px;
  color: #545776;
  }

  .icons{
    display: flex;
    visibility: visible;
    font-size: 13px;
    color: #545776;
    gap: 12px;
  }
  .icon{
   
  }

  .stars{
  margin-left: 5px;
  font-size: 13px;
  color:rgb(34,195,155);
  color: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
}
}
@media (min-width:1365px) {
  .productList{
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px
}
.description{
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  line-height: 16.41px;
  max-height: 50px;
}
.verMas:hover{
  color:white;
  border:1px solid white;
  box-shadow: 0 0 0px rgb(34,195,155),
                0 0 5px rgb(34,195,155),
                0 0 5px rgb(34,195,155);
  background:rgb(34,195,155);
  background: linear-gradient(149deg, rgba(34,195,155,1) 0%, rgba(92,185,159,0.6895133053221288) 100%);
}
.verMas:hover polyline{
    stroke-dashoffset: -460;
}
.cardProduct:hover{
  cursor: pointer;
}
.cardProduct:before {
    content: '';
    background: rgba(237, 235, 234 ) ;
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
.cardProduct:active {
    color: #000
}
.cardProduct:active:after {
    background: transparent;
}
.cardProduct:hover:before {
    opacity: 1;
}

.cardProduct:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.cardProduct{
  max-width: 635px;
}
.cardProduct:hover {
      animation: scale-up-center 0.4s cubic-bezier(0.1, 0.575, 0.585, 1) both;
      cursor: pointer;
    }
    @keyframes scale-up-center {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.009);
      }
    }
.imgProduct{
    height: auto;
    width: auto;
    max-width:372px;
    height: 348px;
    min-width: 372px;
    object-fit: contain;
    border-radius: 8px 0px 0 0;
    cursor: default;
  }
}
`