import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import '../../assets/css/swagger-dark.css'
import '../../assets/css/swagger-custom.css'

const openApiJson = import.meta.env.VITE_KT_API_OPENAPI_JSON

export function ApiDoc () {
  return (
    <SwaggerUI url={openApiJson} />
  )
}
