import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Button } from "./components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from './components/ui/label';
import { SelectContent, SelectItem, SelectValue, Select, SelectTrigger } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Cool!👌</h1>

        <div className="flex items-center gap-3">
          <span className="text-small text-muted-foreground">Desenvolvido por Thiago 🐈‍⬛ no NLW da Rocketseat</span>

          <Separator orientation='vertical' className='h-6' />

          <Button variant="outline">
            <Github className='w-4 h-4 mr-2' />
            Github
          </Button>
        </div>
      </header>

      <main className='flex-1 p-6 flex gap-6'>
        {/* Textareas e texto da parte esquerda da aplicação. */}
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea 
              placeholder='Inclua o prompt para a IA...'
              className='resize-none p-4 leading-relaxed'
            />

            <Textarea 
              placeholder='Resultado gerado pela IA...' readOnly
              className='resize-none p-4 leading-relaxed'
            />
          </div>

          <p className='text-small text-muted-foreground'>
            Lembre-se: você pode utilizar a variável <code className='text-sky-500'>{'{transcription}'}</code> no seu prompt para adicionar o conteúdo do seu video selecionado.
          </p>
        </div>

        {/* Sidebar lateral da aplicação. */}
        <aside className='w-80 space-y-6'>
          {/* Form de envio de vídeo */}
          <form className='space-y-6'>
            <label 
              htmlFor="video"
              className='border flex rounded-md aspect-video cursor-pointer text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/10'
            >
              <FileVideo />
              Selecione um vídeo
            </label>
            <input type="file" id='video' accept='video/mp4' className='sr-only'/>

            <Separator />

            <div className='space-y-2'>
              <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
              <Textarea
                id='transcription_prompt'
                className='h-20 leading-relaxed resize-none'
                placeholder='Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)'
              />
            </div>
            <Button type='submit' className='w-full'>
              Carregar vídeo
              <Upload className='m-4 h-4 ml-2'/>
            </Button>
          </form>

          <Separator />

          <form className='space-y-6'>
            <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='title'>Título do vídeo</SelectItem>
                  <SelectItem value='description'>Descrição do vídeo</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select defaultValue='gpt3.5' disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                Você poderá customizar essa opção em breve
              </span>
            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />
              <span className='block text-xs text-muted-foreground italic leading-relaxed'>
                Valores mais altos geram textos mais criativos, mas menos coerentes.
              </span>
            </div>

            <Separator />

            <Button type='submit' className='w-full'>
              Executar
              <Wand2 className='w-4 h-4 ml-2' />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}