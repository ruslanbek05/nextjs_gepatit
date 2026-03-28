'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import TelegramIcon from '@mui/icons-material/Telegram';
import ShieldIcon from '@mui/icons-material/Shield';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import GroupsIcon from '@mui/icons-material/Groups';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const TELEGRAM_LINK = 'https://t.me/gepatit_uz';

const hepatitisTypes = [
  {
    type: 'A',
    color: '#FFB74D',
    description: 'Передаётся через загрязнённую воду и пищу. Обычно проходит без хронических последствий.',
    prevention: 'Вакцинация, гигиена',
  },
  {
    type: 'B',
    color: '#EF5350',
    description: 'Передаётся через кровь и другие биологические жидкости. Может стать хроническим.',
    prevention: 'Вакцинация, безопасные инъекции',
  },
  {
    type: 'C',
    color: '#AB47BC',
    description: 'Передаётся через кровь. Часто вызывает хроническое заболевание печени.',
    prevention: 'Безопасные инъекции, скрининг крови',
  },
  {
    type: 'D',
    color: '#42A5F5',
    description: 'Встречается только у людей, инфицированных гепатитом B. Усугубляет течение болезни.',
    prevention: 'Вакцинация от гепатита B',
  },
  {
    type: 'E',
    color: '#66BB6A',
    description: 'Передаётся через загрязнённую воду. Особенно опасен для беременных женщин.',
    prevention: 'Гигиена, чистая вода',
  },
];

const symptoms = [
  'Усталость и слабость',
  'Боли в животе',
  'Тошнота и рвота',
  'Потеря аппетита',
  'Желтуха (пожелтение кожи и глаз)',
  'Тёмная моча',
  'Боли в суставах',
  'Повышенная температура',
];

const preventionTips = [
  { icon: <HealthAndSafetyIcon />, text: 'Проводите вакцинацию от гепатита A и B' },
  { icon: <LocalHospitalIcon />, text: 'Используйте только стерильные медицинские инструменты' },
  { icon: <ShieldIcon />, text: 'Соблюдайте правила личной гигиены' },
  { icon: <ScienceIcon />, text: 'Регулярно проходите обследование и сдавайте анализы' },
  { icon: <CheckCircleOutlineIcon />, text: 'Избегайте контакта с чужой кровью' },
  { icon: <InfoOutlinedIcon />, text: 'Пейте только чистую, безопасную воду' },
];

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <Box className="gradient-bg" />

      {/* Hero Section */}
      <Box
        component="section"
        id="hero"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 4, md: 0 },
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            right: '-5%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,191,165,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124,77,255,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 4,
            }}
          >
            <Chip
              label="🏥 Информационный портал"
              className="fade-in-up"
              sx={{
                bgcolor: 'rgba(0, 191, 165, 0.12)',
                color: 'primary.light',
                border: '1px solid rgba(0, 191, 165, 0.3)',
                fontSize: '0.9rem',
                py: 2.5,
                px: 1,
              }}
            />

            <Typography
              variant="h1"
              className="fade-in-up-delay-1 glow-text"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.1,
                maxWidth: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #00bfa5 50%, #00e5ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Гепатит UZ
            </Typography>

            <Typography
              variant="h5"
              className="fade-in-up-delay-2"
              sx={{
                color: 'text.secondary',
                maxWidth: 650,
                lineHeight: 1.6,
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.35rem' },
              }}
            >
              Информация о гепатите, его типах, симптомах и методах профилактики.
              Присоединяйтесь к нашему сообществу для поддержки и обмена опытом.
            </Typography>

            <Box className="fade-in-up-delay-3" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                className="pulse-button"
                startIcon={<TelegramIcon />}
                endIcon={<ArrowForwardIcon />}
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-join-telegram"
                sx={{
                  fontSize: '1.1rem',
                  py: 1.8,
                  px: 5,
                }}
              >
                Присоединиться к группе
              </Button>
            </Box>

            <Typography
              variant="body2"
              className="fade-in-up-delay-4"
              sx={{ color: 'text.secondary', opacity: 0.7 }}
            >
              Открытая публичная группа • Бесплатно
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Hepatitis Types Section */}
      <Box
        component="section"
        id="types"
        sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              icon={<ScienceIcon />}
              label="Типы гепатита"
              sx={{
                mb: 3,
                bgcolor: 'rgba(124, 77, 255, 0.12)',
                color: 'secondary.light',
                border: '1px solid rgba(124, 77, 255, 0.3)',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
              }}
            >
              Виды гепатита
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
            >
              Существует 5 основных типов вирусного гепатита, каждый из которых
              имеет свои особенности передачи и лечения.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {hepatitisTypes.map((item) => (
              <Grid key={item.type} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      borderColor: item.color,
                      boxShadow: `0 8px 40px ${item.color}20`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                          border: `1px solid ${item.color}40`,
                        }}
                      >
                        <Typography
                          variant="h4"
                          sx={{ color: item.color, fontWeight: 800 }}
                        >
                          {item.type}
                        </Typography>
                      </Box>
                      <Typography variant="h5" sx={{ color: 'text.primary' }}>
                        Гепатит {item.type}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}
                    >
                      {item.description}
                    </Typography>
                    <Chip
                      icon={<ShieldIcon sx={{ fontSize: 16 }} />}
                      label={item.prevention}
                      size="small"
                      sx={{
                        bgcolor: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                        '& .MuiChip-icon': { color: item.color },
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Symptoms Section */}
      <Box
        component="section"
        id="symptoms"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(180deg, rgba(124,77,255,0.03) 0%, rgba(0,191,165,0.03) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                icon={<WarningAmberIcon />}
                label="Будьте внимательны"
                sx={{
                  mb: 3,
                  bgcolor: 'rgba(255, 183, 77, 0.12)',
                  color: '#FFB74D',
                  border: '1px solid rgba(255, 183, 77, 0.3)',
                  '& .MuiChip-icon': { color: '#FFB74D' },
                }}
              />
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
              >
                Симптомы гепатита
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}
              >
                Многие формы гепатита могут протекать бессимптомно на ранних стадиях.
                Однако при появлении следующих признаков необходимо немедленно
                обратиться к врачу.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {symptoms.map((symptom, index) => (
                  <Card
                    key={index}
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        borderColor: 'rgba(255, 183, 77, 0.4)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        py: 2,
                        px: 3,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        '&:last-child': { pb: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#FFB74D',
                          flexShrink: 0,
                        }}
                      />
                      <Typography variant="body1" sx={{ color: 'text.primary' }}>
                        {symptom}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Prevention Section */}
      <Box
        component="section"
        id="prevention"
        sx={{ py: { xs: 8, md: 12 } }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              icon={<HealthAndSafetyIcon />}
              label="Профилактика"
              sx={{
                mb: 3,
                bgcolor: 'rgba(0, 191, 165, 0.12)',
                color: 'primary.light',
                border: '1px solid rgba(0, 191, 165, 0.3)',
                '& .MuiChip-icon': { color: '#5df2d6' },
              }}
            />
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}
            >
              Как защитить себя
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
            >
              Простые, но важные меры, которые помогут снизить риск заражения гепатитом.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {preventionTips.map((tip, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      borderColor: 'rgba(0, 191, 165, 0.3)',
                      boxShadow: '0 8px 40px rgba(0, 191, 165, 0.1)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(135deg, rgba(0,191,165,0.2), rgba(0,229,255,0.1))',
                        border: '1px solid rgba(0,191,165,0.3)',
                        color: 'primary.light',
                      }}
                    >
                      {tip.icon}
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7, fontWeight: 500 }}>
                      {tip.text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA / Telegram Section */}
      <Box
        component="section"
        id="join"
        sx={{
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,191,165,0.06) 0%, rgba(124,77,255,0.06) 100%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative' }}>
          <Card
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(18,24,41,0.9) 0%, rgba(30,35,60,0.9) 100%)',
              border: '1px solid rgba(0, 191, 165, 0.2)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 100px rgba(0, 191, 165, 0.05)',
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 4,
                background: 'linear-gradient(135deg, #0088cc 0%, #00bcd4 100%)',
                boxShadow: '0 8px 30px rgba(0, 136, 204, 0.3)',
              }}
            >
              <TelegramIcon sx={{ fontSize: 40, color: '#fff' }} />
            </Box>

            <Typography
              variant="h3"
              sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 2 }}
            >
              Присоединяйтесь к нашему сообществу
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 500,
                mx: 'auto',
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.7,
              }}
            >
              Наша публичная группа в Telegram — место для обмена информацией,
              поддержки и общения для всех, кто столкнулся с гепатитом.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', mb: 4 }}>
              {[
                { icon: <GroupsIcon />, text: 'Открытое сообщество' },
                { icon: <InfoOutlinedIcon />, text: 'Актуальная информация' },
                { icon: <HealthAndSafetyIcon />, text: 'Поддержка и советы' },
              ].map((item, index) => (
                <Chip
                  key={index}
                  icon={item.icon}
                  label={item.text}
                  sx={{
                    py: 2.5,
                    px: 1,
                    bgcolor: 'rgba(0, 191, 165, 0.08)',
                    color: 'primary.light',
                    border: '1px solid rgba(0, 191, 165, 0.2)',
                    '& .MuiChip-icon': { color: '#5df2d6' },
                  }}
                />
              ))}
            </Box>

            <Button
              variant="contained"
              size="large"
              startIcon={<TelegramIcon />}
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-join-telegram"
              sx={{
                fontSize: '1.15rem',
                py: 2,
                px: 6,
                background: 'linear-gradient(135deg, #0088cc 0%, #00bcd4 100%)',
                boxShadow: '0 4px 20px rgba(0, 136, 204, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #00bcd4 0%, #0088cc 100%)',
                  boxShadow: '0 6px 30px rgba(0, 136, 204, 0.6)',
                },
              }}
            >
              Открыть Telegram группу
            </Button>

            <Typography
              variant="body2"
              sx={{ mt: 3, color: 'text.secondary', opacity: 0.6 }}
            >
              t.me/gepatit_uz
            </Typography>
          </Card>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        id="footer"
        sx={{
          py: 4,
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 4 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.6 }}>
              © {new Date().getFullYear()} Гепатит UZ. Информационный портал.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', opacity: 0.5, fontSize: '0.85rem' }}>
              Данный сайт носит исключительно информационный характер и не заменяет
              консультацию врача.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
