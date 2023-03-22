import react, { FC } from 'react'
import Link from 'next/link'
import CSVReader from './_CSVReader'



interface TestComponentProps {
 content: string
}

const TestComponent:FC<TestComponentProps> = ({ content }) => {
    return (
        <div>
            <h1><Link href="/">TEST</Link></h1>
        <section>
            <p>{ content }</p>
            <CSVReader />
        </section>
        </div>
    )
}

export default TestComponent