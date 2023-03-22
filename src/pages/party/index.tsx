import react, { FC } from 'react'
import TestComponent from './_test'

const TestPage: FC = () => {
    return (
        <div>
            <TestComponent content={'i am some content'} />
        </div>
    )
}

export default TestPage