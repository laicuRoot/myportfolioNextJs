import Layout from '../components/Layout/Layout';

export default function ContactMe(){
    return(
        <Layout>
            <div className='container mx-auto m-5'>
                <h1 className='text-6xl font-bold text-center'>Contact Me</h1>
                <div className='text-lg text-center'>
                    <form>
                        Name:<input type='text'/>
                    </form>
                </div>


            </div>
            
        </Layout>
    )
}