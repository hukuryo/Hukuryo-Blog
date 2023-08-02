import { GetStaticProps, NextPage, GetStaticPaths } from "next"
import Head from "next/head";
import { useRouter } from "next/router";


type ISRProps = {
    message: string
}


const ISR: NextPage<ISRProps> = (props) => {
    const {message} = props;

    const router = useRouter();

    if(router.isFallback){
        return <div>Loading...</div>
    }

    return(
        <div>
            <Head>
                <title>ISR Page</title>
            </Head>
            <main>
                <p>このページはISRで作成したページです。</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}にこのページのgetStaticPropsが実行された`

    return{
        props: {
            message,
        },
        revalidate: 60,
    }
}

export default ISR