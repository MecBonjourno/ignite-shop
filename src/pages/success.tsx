import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Sucesso</h1>
      <ImageContainer></ImageContainer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
        impedit, <strong> Guilherme Zago </strong>
        quod distinctio inventore modi repellendus ipsum aspernatur voluptas
        temporibus voluptatum tenetur fugit suscipit deserunt velit! Quod
        maiores sit deserunt reprehenderit.
      </p>
      <Link href="/">Voltar ao Catalogo</Link>
    </SuccessContainer>
  )
}
