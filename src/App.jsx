import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { 
  Wrench, 
  Layout, 
  Settings, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Star,
  CheckCircle,
  Users,
  Clock,
  Award,
  LogIn,
  User
} from 'lucide-react'
import officeDesign1 from './assets/office_design_ref1.webp'
import officeDesign2 from './assets/office_design_ref2.jpg'
import officeDesign3 from './assets/office_design_ref3.jpg'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simulação de envio do formulário
    try {
      // Aqui seria implementada a integração com Google Cloud Functions
      console.log('Enviando formulário:', formData)
      
      // Simulação de delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      alert('Erro ao enviar mensagem. Tente novamente.')
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para montagem de móveis de escritório.')
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  const handleGoogleLogin = () => {
    // Simulação de login com Google
    // Em produção, seria integrado com Firebase Auth
    setIsLoggedIn(true)
    setUser({
      name: 'João Silva',
      email: 'joao.silva@email.com',
      picture: 'https://via.placeholder.com/40'
    })
    alert('Login realizado com sucesso!')
  }

  const handleMicrosoftLogin = () => {
    // Simulação de login com Microsoft
    // Em produção, seria integrado com Firebase Auth
    setIsLoggedIn(true)
    setUser({
      name: 'Maria Santos',
      email: 'maria.santos@outlook.com',
      picture: 'https://via.placeholder.com/40'
    })
    alert('Login realizado com sucesso!')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    alert('Logout realizado com sucesso!')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">MóveisOffice</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Início</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Serviços</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Portfólio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Sobre</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contato</a>
            </nav>
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <img 
                    src={user.picture} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">Olá, {user.name.split(' ')[0]}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleLogout}
                  >
                    Sair
                  </Button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleGoogleLogin}
                    className="text-xs"
                  >
                    <LogIn className="h-3 w-3 mr-1" />
                    Google
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleMicrosoftLogin}
                    className="text-xs"
                  >
                    <LogIn className="h-3 w-3 mr-1" />
                    Microsoft
                  </Button>
                </div>
              )}
              <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Montagem de Móveis de Escritório
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Serviços profissionais de montagem, consultoria em layout e manutenção para seu escritório
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Orçamento
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Portfólio
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={officeDesign1} 
                alt="Escritório moderno montado" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Móveis Montados</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Garantia de Qualidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para seu escritório, desde a montagem até a consultoria em layout
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Wrench className="h-16 w-16 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Montagem de Móveis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Profissionais qualificados para montagem de móveis de escritório, residenciais e comerciais com garantia de qualidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Layout className="h-16 w-16 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Consultoria em Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Auxílio na organização e otimização de espaços para melhor aproveitamento e funcionalidade do ambiente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Settings className="h-16 w-16 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Manutenção e Reparos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Serviços de manutenção preventiva e corretiva para prolongar a vida útil dos seus móveis de escritório.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Portfólio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos realizados em escritórios de diferentes tamanhos e estilos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={officeDesign1} 
                  alt="Escritório moderno com móveis planejados" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Escritório Corporativo Moderno</h3>
                <p className="text-gray-600">Montagem completa de móveis planejados para empresa de tecnologia</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={officeDesign2} 
                  alt="Home office elegante" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Home Office Elegante</h3>
                <p className="text-gray-600">Consultoria e montagem de móveis para escritório residencial</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={officeDesign3} 
                  alt="Escritório colaborativo" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Espaço Colaborativo</h3>
                <p className="text-gray-600">Layout otimizado para trabalho em equipe e produtividade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos especialistas em montagem de móveis de escritório com mais de 5 anos de experiência no mercado. 
                Nossa missão é transformar espaços de trabalho em ambientes funcionais, organizados e produtivos.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Trabalhamos com as principais marcas do mercado e oferecemos garantia em todos os nossos serviços. 
                Nossa equipe é treinada e certificada para garantir a máxima qualidade e segurança na montagem.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 - Avaliação dos clientes</span>
              </div>
            </div>
            <div>
              <img 
                src={officeDesign2} 
                alt="Profissional montando móveis" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quanto tempo leva para montar um móvel?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O tempo varia conforme a complexidade do móvel. Móveis simples levam de 30 minutos a 1 hora, 
                  enquanto móveis mais complexos podem levar várias horas. Fornecemos uma estimativa no orçamento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vocês fornecem as ferramentas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Nossos profissionais trazem todas as ferramentas necessárias para a montagem. 
                  Você não precisa se preocupar com nada.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Há garantia nos serviços?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Oferecemos garantia de 90 dias em todos os nossos serviços de montagem. 
                  Se houver algum problema relacionado à montagem, retornamos sem custo adicional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Atendem em quais regiões?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Atendemos São Paulo capital e toda a região metropolitana. 
                  Para outras localidades, consulte disponibilidade através do WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solicite seu orçamento sem compromisso. Respondemos em até 24 horas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Descreva seu projeto ou dúvida..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Telefone</div>
                      <div className="text-gray-600">(11) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">E-mail</div>
                      <div className="text-gray-600">contato@moveisoffice.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Localização</div>
                      <div className="text-gray-600">São Paulo - SP e Região Metropolitana</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wrench className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-2xl font-bold">MóveisOffice</span>
              </div>
              <p className="text-gray-400">
                Especialistas em montagem de móveis de escritório. 
                Transformando espaços de trabalho em ambientes produtivos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Início</a></li>
                <li><a href="#services" className="hover:text-white">Serviços</a></li>
                <li><a href="#portfolio" className="hover:text-white">Portfólio</a></li>
                <li><a href="#about" className="hover:text-white">Sobre</a></li>
                <li><a href="#contact" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div>(11) 99999-9999</div>
                <div>contato@moveisoffice.com.br</div>
                <div>São Paulo - SP</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MóveisOffice. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsApp}
          className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export default App

