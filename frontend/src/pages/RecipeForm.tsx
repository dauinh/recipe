import { Button, Flex, Input, Textarea } from "@chakra-ui/react"
import { useForm } from "react-hook-form"


type FormData = {
  title: string
  description: string
  ingredients: string
  instruction: string
}


export default function RecipeForm() {
  const {
    register,
    handleSubmit,
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Flex 
        direction='column' 
        align='flex-start' 
        justify='space-between'
        rowGap='15px'
        minHeight='20vh'
        padding='10%'
        >
        <label>Title</label>
        <Input {...register("title")} />
        <label>Description</label>
        <Input {...register("description")} />
        <label>Ingredients</label>
        <Textarea {...register("ingredients")} resize='vertical' />
        <label>Instruction</label>
        <Textarea {...register("instruction")} resize='vertical' />
        <Button type='submit'>Submit</Button>
      </Flex>
    </form>
  )
}