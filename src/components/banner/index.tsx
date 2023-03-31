import {
  ButtonAddTask,
  ContainerBanner,
  ContentBanner,
  Form,
  InputTask,
} from './styles'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { api } from '@/src/lib/axios'

const taskFormSchema = z.object({
  task: z.string(),
})

type TaskFormData = z.infer<typeof taskFormSchema>

export const Banner = () => {
  const { register, handleSubmit } = useForm<TaskFormData>({})

  async function handleAddTask(data: TaskFormData) {
    await api.post('/addtask', {
      task: data.task,
    })
  }

  return (
    <ContainerBanner>
      <ContentBanner src="./banner.png" alt="" />
      <Form onSubmit={handleSubmit(handleAddTask)}>
        <InputTask type="text" {...register('task')} />
        <button type="submit">
          <ButtonAddTask size={32} />
        </button>
      </Form>
    </ContainerBanner>
  )
}
