import React from "react"

import { Row } from "./styles"

function ResultsTableEntries({ result }: { result: any[] }) {
  console.log(result)
  return (
    <>
      <Row>{result[1]}</Row>
    </>
  )
}

export default ResultsTableEntries
