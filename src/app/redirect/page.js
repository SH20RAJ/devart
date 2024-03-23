import { redirect } from 'next/navigation'

export default (params) => {
    console.log(params);
    let url = params.searchParams.url;
    redirect(url)
    return (
        <>
        </>

    )
}