import { DocumentationLayout } from "../layouts"
import { Title, CopyCommand, Paragraph, List } from "../components"

export const Instalation = () => {
  return (
    <DocumentationLayout>
      <Title variant="h1" className="mb-12">
        Instalación
      </Title>

      <section>
        <Title variant="h2">Requerimientos</Title>
        <Paragraph className="mt-4">
          Antes de instalar el proyecto, asegúrate de tener instalado los
          siguientes programas:
        </Paragraph>

        <List className="mt-4">
          <li>Node.js</li>
          <li>Git</li>
        </List>

        <Title variant="h3" className="mt-8">
          Node.js
        </Title>
        <Paragraph className="mt-4">
          To install Node.js, go to the official website and download the latest
          version of the LTS.
        </Paragraph>
      </section>

      <section>
        <Title variant="h2" className="mb-12">
          Instalación
        </Title>
        <Paragraph className="mb-4">
          Para instalar el proyecto, sigue los siguientes pasos:
        </Paragraph>

        <List className="mt-4 list-decimal pl-4">
          <li>Clona el repositorio</li>
          <li>Instala las dependencias</li>
          <li>Corre el proyecto</li>
        </List>

        <Title variant="h3" className="mb-8">
          Clona el repositorio
        </Title>
        <Paragraph className="mb-4">
          Abre la terminal y ejecuta el siguiente comando:
        </Paragraph>
        <CopyCommand command="git clone" />
      </section>
    </DocumentationLayout>
  )
}
