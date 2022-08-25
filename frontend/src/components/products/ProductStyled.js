import styled from "styled-components";
import colors from '../colors.json'
export const ProductStyled = styled.section`
justify-content:center;
align-items: center;
.titleSection{
  color: ${colors[0].principal};
  display: flex;
  justify-content: center;
}
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
  height: 490px;
  position: relative;
  border: 1px solid ${colors[0].principal2};
  align-items: center;
  margin: 20px 0 0 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 8px 8px;
  background-color: white;
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
  color: ${colors[0].titles}
}

.stars{
  margin-left: 5px;
  font-size: 13px;
  color: rgb(212,175,55);
  color: linear-gradient(0deg, rgba(212,175,75,1) 28%, rgba(212,154,0,1) 100%);
}
.title{
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${colors[0].titles};
}
.ubication{
  font-size: 14px;
  font-weight: 500;
  color: ${colors[0].titles};
}
.location{
  margin-left:5px;
  color: ${colors[0].titles};
}
.iconLocation{
  font-size:13px;
  color: ${colors[0].titles};
}

.icons{
  display:none;
}
.map{
  color: ${colors[0].principal};
}
.description{
  font-size: 14px;
  font-weight: bold;
  line-height: 16.41px;
  max-height: 65px;
  color: ${colors[0].text};
  overflow:hidden;
}
.verMas{
  width: 100%;
  height: 40px;
  background: ${colors[0].principal2};
  color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  border: none;
}
li{
  list-style: none;
}
@media (min-width:768px) {
  .productList{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.caption{
  margin: 10px;
  width: 330px;
}
  .cardProduct{
    display: flex;
    flex-direction: row;
    width: 710px;
    height: 279px;
    align-items: center;
    margin: 20px 0 0 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
  .imgProduct{
    height: 281px;
    width: 372px;
    object-fit: cover;
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

  .stars{
  margin-left: 5px;
  font-size: 13px;
}

}
@media (min-width:1365px) {
  .productList{
  display: grid;
  grid-template-columns: auto auto;
  gap: 30px
}

li{
  list-style: none;
}
.description{
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  max-height: 50px;
}
.verMas:hover{
  color:white;
  border:1px solid ${colors[0].titles};
  background: ${colors[0].principal2};
  cursor: pointer;
}
.verMas:hover polyline{
    stroke-dashoffset: -460;
}
.cardProduct:hover{
  cursor: pointer;
}
.cardProduct:before {
    content: '';
    background: white; 
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(100px);
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
    max-width:352px;
    height: 260px;
    min-width: 352px;
    object-fit: cover;
    border-radius: 8px 0px 0 0;
    cursor: default;
  }
}
`