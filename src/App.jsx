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
  User,
  Instagram // Adicionado ícone do Instagram
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
    
    // Simulación de envío del formulario
    try {
      // Aquí se implementaría la integración con Google Cloud Functions
      console.log('Enviando formulario:', formData)
      
      // Simulación de retraso de envío
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      alert('Error al enviar el mensaje. Inténtalo de nuevo.')
      console.log('Error al enviar el mensaje:', error)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('¡Hola! Me gustaría solicitar un presupuesto para el montaje de muebles de oficina.')
    window.open(`https://wa.me/3495999999999?text=${message}`, '_blank')
  }

  const handleGoogleLogin = () => {
    // Simulación de login con Google
    // Em produção, seria integrado com Firebase Auth
    setIsLoggedIn(true)
    setUser({
      name: 'Juan Silva',
      email: 'juan.silva@email.com',
      picture: 'https://via.placeholder.com/40'
    })
    alert('¡Inicio de sesión realizado con éxito!')
  }

  const handleMicrosoftLogin = () => {
    // Simulación de login com Microsoft
    // Em produção, seria integrado com Firebase Auth
    setIsLoggedIn(true)
    setUser({
      name: 'María Santos',
      email: 'maria.santos@outlook.com',
      picture: 'https://via.placeholder.com/40'
    })
    alert('¡Inicio de sesión realizado con éxito!')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
    alert('¡Cierre de sesión realizado con éxito!')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">MueblesOficina</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">Inicio</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Servicios</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium">Portafolio</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">Sobre Nosotros</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contacto</a>
            </nav>
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <img 
                    src={user.picture} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm text-gray-700">Hola, {user.name.split(' ')[0]}</span>
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
              <Button asChild className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 ml-2">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4 mr-2" />
                  Instagram
                </a>
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
                Montaje de Muebles de Oficina
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Servicios profesionales de montaje, consultoría en diseño y mantenimiento para su oficina
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar Presupuesto
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white [background:oklch(0.62_0.14_328.11)] hover:[background:oklch(0.62_0.14_328.11)] hover:text-white px-8 py-3"
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Portafolio
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={officeDesign1} 
                alt="Oficina moderna montada" 
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
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Muebles Montados</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Garantía de Calidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas para su oficina, desde el montaje hasta la consultoría en diseño
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Wrench className="h-16 w-16 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Montaje de Muebles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Profesionales calificados para el montaje de muebles de oficina, residenciales y comerciales con garantía de calidad.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Layout className="h-16 w-16 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Consultoría en Diseño</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Asistencia en la organización y optimización de espacios para un mejor aprovechamiento y funcionalidad del ambiente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Settings className="h-16 w-16 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Mantenimiento y Reparaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Servicios de mantenimiento preventivo y correctivo para prolongar la vida útil de sus muebles de oficina.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Portafolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vea algunos de nuestros trabajos realizados en oficinas de diferentes tamaños y estilos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={officeDesign1} 
                  alt="Oficina moderna con muebles a medida" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Oficina Corporativa Moderna</h3>
                <p className="text-gray-600">Montaje completo de muebles a medida para empresa de tecnología</p>
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
                <p className="text-gray-600">Consultoría y montaje de muebles para oficina en casa</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={officeDesign3} 
                  alt="Oficina colaborativa" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Espacio Colaborativo</h3>
                <p className="text-gray-600">Diseño optimizado para trabajo en equipo y productividad</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos especialistas en el montaje de muebles de oficina con más de 5 años de experiencia en el mercado. 
                Nuestra misión es transformar espacios de trabajo en ambientes funcionales, organizados y productivos.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Trabajamos con las principales marcas del mercado y ofrecemos garantía en todos nuestros servicios. 
                Nuestro equipo está capacitado y certificado para garantizar la máxima calidad y seguridad en el montaje.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">4.9/5 - Valoración de los clientes</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Resuelva sus dudas sobre nuestros servicios
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>¿Cuánto tiempo se tarda en montar un mueble?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  El tiempo varía según la complejidad del mueble. Los muebles simples tardan de 30 minutos a 1 hora, 
                  mientras que los más complejos pueden tardar varias horas. Proporcionamos una estimación en el presupuesto.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Proporcionan las herramientas?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ¡Sí! Nuestros profesionales traen todas las herramientas necesarias para el montaje. 
                  No tiene que preocuparse por nada.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Hay garantía en los servicios?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ofrecemos garantía de 90 días en todos nuestros servicios de montaje. 
                  Si hay algún problema relacionado con el montaje, regresamos sin costo adicional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿En qué regiones atienden?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Atendemos Sevilla capital y toda la región metropolitana. 
                  Para otras localidades, consulte disponibilidad a través de WhatsApp.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctenos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solicite su presupuesto sin compromiso. Respondemos en un plazo de 24 horas.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Enviar un Mensaje</CardTitle>
                  <CardDescription>
                    Complete el formulario a continuación y nos pondremos en contacto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo</Label>
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
                      <Label htmlFor="email">Correo Electrónico</Label>
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
                      <Label htmlFor="phone">Teléfono</Label>
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
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Describa su proyecto o consulta..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-gray-600">(95) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">E-mail</div>
                      <div className="text-gray-600">contato@moveisoffice.com.es</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <div className="font-semibold">Ubicación</div>
                      <div className="text-gray-600">Sevilla y Región Metropolitana</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg mb-4"
                >
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Falar no WhatsApp
                </Button>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white py-6 text-lg"
                >
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 mr-3" />
                    Instagram
                  </a>
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
                <span className="text-2xl font-bold">MueblesOficina</span>
              </div>
              <p className="text-gray-400">
                Especialistas en el montaje de muebles de oficina. 
                Transformando espacios de trabajo en ambientes productivos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Inicio</a></li>
                <li><a href="#services" className="hover:text-white">Servicios</a></li>
                <li><a href="#portfolio" className="hover:text-white">Portafolio</a></li>
                <li><a href="#about" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#contact" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-gray-400">
                <div>(95) 99999-9999</div>
                <div>contacto@moveisoffice.com.es</div>
                <div>Sevilla</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MueblesOficina. Todos los derechos reservados.</p>
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
      {/* Instagram Float Button */}
      <div className="fixed bottom-6 right-20 z-50">
        <Button
          asChild
          className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 rounded-full p-4 shadow-lg"
          size="lg"
        >
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-white" />
          </a>
        </Button>      
      </div>
    </div>
  )
}

export default App

