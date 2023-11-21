import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* CSS Reset */
*,
*::before,
*::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

button {
   border: none;
   cursor: pointer;
   background-color: transparent;
}

input,
button {
   border: none;
   font-family: inherit;
   background-color: transparent;
}

a {
   text-decoration: none;
}

/* Global */

html {
   font-family: sans-serif;
}

html,
body,
#root {
   width: 100%;
   height: 100%;
   color: white;
   background-color: ${(props) => props.theme.palette.neutral[5]};;
}

/* Datepicker */

.react-datepicker {
   transform: translateX(-25%);
   border-color: ${(props) => props.theme.palette.neutral[2]};;
}

.react-datepicker__triangle {
   display: none;
}

.react-datepicker__month-container {
   border-radius: 4px;
   background-color: ${(props) => props.theme.palette.neutral[5]};
}

.react-datepicker__header {
   background-color: ${(props) => props.theme.palette.neutral[5]};
   border-bottom-color: ${(props) => props.theme.palette.neutral[2]};
}

.react-datepicker__current-month {
   color: ${(props) => props.theme.palette.neutral[1]};
}

.react-datepicker__day-names {
   color: ${(props) => props.theme.palette.neutral[1]};
}

.react-datepicker__day-name {
   color: ${(props) => props.theme.palette.neutral[1]};
}

.react-datepicker__day {
   border-radius: 2px;
   color: ${(props) => props.theme.palette.neutral[1]};
   border: 1px solid transparent;
   
   &:hover {
      border-radius: 2px;
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.palette.primary[4]};;
   }

}

.react-datepicker__day--today {
   background: rgba(255,255,255,0.05);
}

.react-datepicker__day--selected {
   background-color: ${(props) => props.theme.palette.primary[4]};
}


.react-datepicker__day--outside-month {
   color: ${(props) => props.theme.palette.neutral[2]};;
}

.react-datepicker__day--keyboard-selected {
   background-color: transparent;
}

/* Scrollbar */

*::-webkit-scrollbar {
   width: 8px;
   height: 8px;
   background-color: rgba(0, 0, 0, 0.1);
   border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
   border-radius: 4px;
   -webkit-border-radius: 4px;
   background-color:  ${(props) => props.theme.palette.neutral[3]};
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
   -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}

*::-webkit-scrollbar-corner {
   background: #000;
}
`;

export { GlobalStyle };
