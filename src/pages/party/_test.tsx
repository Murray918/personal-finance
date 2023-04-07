import react, { FC, useState } from "react"
import Link from "next/link"

// components
import { CSVReader, ResultsItem } from "@/components"

// styles
import { ContentWrapper, List, Table } from "./styles"
interface TestComponentProps {
  content: string
}

const TestComponent: FC<TestComponentProps> = ({ content }) => {
  const [results, setResults] = useState<null | any>(null)

  const uploadAccepted = (results: any) => {
    // commit the state here
    setResults(results)
  }

  // move out of render
  const composedResults = results?.data.map((item: any) => (
    <p>{item.toString()}</p>
  ))

  return (
    <ContentWrapper>
      <h1>
        <Link href="/">{content}</Link>
      </h1>
      <section>
        <CSVReader uploadAccepted={uploadAccepted} />
      </section>
      <section>
        {/*  this section should only show when results are present */}
        <List>
          {results?.data.map((result: any) => {
            return <ResultsItem result={result} />
          })}
        </List>
      </section>
    </ContentWrapper>
  )
}

export default TestComponent
