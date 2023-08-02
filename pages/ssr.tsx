import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const {message} = props

    return(
        <div>
            <Head>
                <title>Create SSR Page</title>
            </Head>
            <main>
                <p>このページはSSRで作成したページです。</p>
            </main>
        </div>
    )
}

export const getServerSSideProps: GetServerSideProps<SSRProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にこのページのgetServerSidePropsが実行されました。`
    console.log(message);

    return{
        props: {
            message,
        },
    }
}

export default SSR