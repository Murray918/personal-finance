import styled from "styled-components"

const primaryColor = "#007dc3"
const secondaryColor = "#f05133"
const accentColor = "#f5a623"
const textColor = "#333"
const shadowColor = "rgba(0, 0, 0, 0.2)"
const borderRadius = "5px"
const padding = "1rem"
const margin = "1rem"

export const ContentWrapper = styled.div`
  padding: 4rem;
  margin: 0 auto;
`

export const TableSection = styled.section`
  margin: 0 auto;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${margin};
`

const Input = styled.input`
  padding: ${padding};
  margin-bottom: ${margin};
  border: none;
  border-radius: ${borderRadius};
  box-shadow: 0 0 0 2px ${secondaryColor};
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${secondaryColor};
  }
`

const TableHeader = styled.th`
  padding: ${padding};
  background-color: ${primaryColor};
  color: white;
`

const TableCell = styled.td`
  padding: ${padding};
`

const Dropdown = styled.select`
  padding: ${padding};
  margin: ${margin} 0;
  border: none;
  border-radius: ${borderRadius};
  box-shadow: 0 0 0 2px ${secondaryColor};
`

const Button = styled.button`
  padding: ${padding};
  margin: ${margin} 0;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: ${borderRadius};
  box-shadow: 0 2px 4px ${shadowColor};
  cursor: pointer;
`

export {
  List,
  Form,
  Input,
  Table,
  TableRow,
  TableHeader,
  TableCell,
  Dropdown,
  Button,
}
