import { Container, Button, CopyCommand } from "../components"
import { NavLink } from "react-router-dom"
import { PageLayout } from "../layouts"
import { routes } from "../router"

export const Home = () => (
  <PageLayout>
    <section className="bg-black text-white relative w-full py-28 flex flex-col justify-center h-full min-h-[1060px]">
      <div className="h-full w-full bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 absolute top-0 left-0 right-0 bottom-0 m-auto z-10" />
      <video
        width="100%"
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 m-auto aspect-video"
        autoPlay
        muted
        loop
        poster="https://d2ra1qv4p9we6t.cloudfront.net/uploads/903b911e-753b-4612-b581-97a69574009b/original/particles-red.jpg"
      >
        <source
          src="https://d2ra1qv4p9we6t.cloudfront.net/uploads/33601d44-4202-44e0-962a-77d68128023f/original/particles-red.mp4"
          type="video/mp4"
        />
      </video>
      <Container className="relative z-20">
        <h1 className="custom-illuminated-text text-9xl text-center px-6 uppercase font-black mb-6">
          Andromeda
        </h1>
        <p className="text-center font-medium text-lg mb-16 max-w-[800px] mx-auto">
          Crea interfaces con velocidad y precisión usando un sistema robusto,
          flexible, y fácil de implementar. Optimiza tu flujo de trabajo y
          garantiza la consistencia en cada proyecto.
        </p>
        <div className="flex justify-center space-x-4">
          <NavLink to={routes.instalation.path}>
            <Button>Introducción</Button>
          </NavLink>
          <CopyCommand command="npm install @andromeda-ds/components" />
        </div>
      </Container>
    </section>
  </PageLayout>
)
