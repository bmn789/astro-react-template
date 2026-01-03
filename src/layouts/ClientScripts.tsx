import '@/services/config'


const ClientScripts = ({ params }: { params: Record<string, string | undefined> }) => {

    const isMobile = window.innerWidth < 768
    Object.assign(window, { locals: null, params, isMobile })

    return <div>
    </div>
}

export default ClientScripts