export default function FormError({error}){
    return <div>

        {error && <>
            {error.type === "required" && <span>El campo es requerido</span>}
        </>}

    </div>
}