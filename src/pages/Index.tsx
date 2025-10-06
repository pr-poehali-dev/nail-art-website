import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const services = [
  { id: 1, name: 'Классический маникюр', price: '1500 ₽', duration: '60 мин', icon: 'Sparkles' },
  { id: 2, name: 'Аппаратный маникюр', price: '1800 ₽', duration: '70 мин', icon: 'Zap' },
  { id: 3, name: 'Покрытие гель-лак', price: '2000 ₽', duration: '90 мин', icon: 'Palette' },
  { id: 4, name: 'Наращивание ногтей', price: '3500 ₽', duration: '120 мин', icon: 'Star' },
  { id: 5, name: 'Дизайн ногтей', price: 'от 500 ₽', duration: '30 мин', icon: 'Brush' },
  { id: 6, name: 'Укрепление ногтей', price: '2200 ₽', duration: '80 мин', icon: 'Shield' },
];

const masters = [
  { 
    id: 1, 
    name: 'Анна Петрова', 
    specialty: 'Топ мастер',
    experience: '8 лет опыта',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
    description: 'Специализируюсь на сложном дизайне и художественной росписи'
  },
  { 
    id: 2, 
    name: 'Мария Иванова', 
    specialty: 'Дизайн ногтей',
    experience: '5 лет опыта',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    description: 'Создаю уникальные дизайны с использованием новейших техник'
  },
  { 
    id: 3, 
    name: 'Елена Смирнова', 
    specialty: 'Наращивание',
    experience: '6 лет опыта',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    description: 'Эксперт по наращиванию и укреплению натуральных ногтей'
  },
];

const gallery = [
  { id: 1, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop', title: 'Нежный розовый маникюр', category: 'Классика' },
  { id: 2, image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600&h=600&fit=crop', title: 'Французский маникюр', category: 'Френч' },
  { id: 3, image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&h=600&fit=crop', title: 'Яркий дизайн', category: 'Дизайн' },
  { id: 4, image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&h=600&fit=crop', title: 'Стразы и блестки', category: 'Праздничный' },
  { id: 5, image: 'https://images.unsplash.com/photo-1599948128020-9a44a1f9a754?w=600&h=600&fit=crop', title: 'Минимализм', category: 'Минимализм' },
  { id: 6, image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop', title: 'Геометрический дизайн', category: 'Геометрия' },
  { id: 7, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=600&fit=crop', title: 'Омбре градиент', category: 'Омбре' },
  { id: 8, image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=600&fit=crop', title: 'Художественная роспись', category: 'Роспись' },
  { id: 9, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&h=600&fit=crop', title: 'Матовое покрытие', category: 'Матовый' },
];

const timeSlots = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

export default function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedMaster, setSelectedMaster] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    if (!selectedService || !selectedMaster || !selectedDate || !selectedTime || !clientName || !clientPhone) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }
    
    toast.success(`Запись успешно создана! ${clientName}, ждем вас ${selectedDate.toLocaleDateString('ru-RU')} в ${selectedTime}`);
    setIsBookingOpen(false);
    setSelectedService('');
    setSelectedMaster('');
    setSelectedDate(undefined);
    setSelectedTime('');
    setClientName('');
    setClientPhone('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nail Studio 💅
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#price" className="text-foreground hover:text-primary transition-colors">Прайс</a>
              <a href="#masters" className="text-foreground hover:text-primary transition-colors">Мастера</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
                  Онлайн-запись
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Записаться на услугу</DialogTitle>
                  <DialogDescription>Выберите услугу, мастера и удобное время</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Ваше имя</Label>
                    <Input 
                      placeholder="Введите ваше имя" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input 
                      placeholder="+7 (___) ___-__-__" 
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите услугу</Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map(service => (
                          <SelectItem key={service.id} value={service.id.toString()}>
                            {service.name} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите мастера</Label>
                    <Select value={selectedMaster} onValueChange={setSelectedMaster}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите мастера" />
                      </SelectTrigger>
                      <SelectContent>
                        {masters.map(master => (
                          <SelectItem key={master.id} value={master.id.toString()}>
                            {master.name} - {master.specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите дату</Label>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Выберите время</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map(time => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={handleBooking} 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                    size="lg"
                  >
                    Записаться
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Студия красоты ногтей
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Профессиональный маникюр, педикюр и дизайн ногтей от опытных мастеров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 shadow-xl"
                onClick={() => setIsBookingOpen(true)}
              >
                <Icon name="Calendar" className="mr-2" size={24} />
                Записаться онлайн
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Широкий спектр услуг для ваших ногтей</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-center text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-center text-lg font-semibold text-primary">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Прайс-лист</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Прозрачные цены на все услуги</p>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {services.map(service => (
                    <div key={service.id} className="flex justify-between items-center py-4 border-b last:border-b-0 hover:bg-accent/20 transition-colors px-4 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name={service.icon as any} size={24} className="text-primary" />
                        <div>
                          <p className="font-semibold text-lg">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.duration}</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-primary">{service.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="masters" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши мастера</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Команда профессионалов с большим опытом</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {masters.map((master, index) => (
              <Card 
                key={master.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 mx-auto border-4 border-primary/20">
                    <img 
                      src={master.image} 
                      alt={master.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{master.name}</CardTitle>
                  <CardDescription className="text-lg">
                    <div className="font-semibold text-primary mt-2">{master.specialty}</div>
                    <div className="text-muted-foreground mt-1">{master.experience}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{master.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея работ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Примеры наших лучших работ</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <div 
                key={item.id}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
                  <p className="text-white font-semibold text-lg mb-1">{item.title}</p>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь с нами удобным способом</p>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">г. Москва, ул. Примерная, д. 123</p>
                <p className="text-muted-foreground mt-2">ТЦ "Красота", 2 этаж</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" className="text-primary" size={24} />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (999) 123-45-67</p>
                <p className="text-muted-foreground mt-2">Ежедневно с 10:00 до 21:00</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" className="text-primary" size={24} />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">info@nailstudio.ru</p>
                <p className="text-muted-foreground mt-2">Ответим в течение 24 часов</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Instagram" className="text-primary" size={24} />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">@nailstudio.moscow</p>
                <p className="text-muted-foreground mt-2">Следите за нашими работами</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-12 py-6 shadow-xl"
              onClick={() => setIsBookingOpen(true)}
            >
              <Icon name="Calendar" className="mr-2" size={24} />
              Записаться прямо сейчас
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Nail Studio 💅</p>
          <p className="text-white/80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}