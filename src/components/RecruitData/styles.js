import styled from 'styled-components'

export const RecruitDataWrapper  =   styled.div`

margin:30px;
table {
width: 100%;

}

table th,
table td {
border: 1px solid #ccc;
padding: 20px;
}

table th {
font-weight: bold;
background-color: #dedede; 
}

@media screen and (max-width: 767px) {
table,
table tr,
table td,
table th {display:block;}
table th {width:auto;}
}
`