import { Heading, VStack, Text} from "native-base";

import Logo from '../assets/logo.svg'
import { Button } from "../components/Button";

import { Header } from "../components/Header";
import { Input } from "../components/Input";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton/>

      <VStack mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
          Encontrar o seu bolão através de {'\n'}
          um código único
        </Heading>

        <Input
          mb={2}
          placeholder="Qual o código do seu bolão?"
        />

        <Button
          title="BUSCAR BOLÃO"
        />

      </VStack>
    </VStack>
  )
}