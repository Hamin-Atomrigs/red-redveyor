const portfolios = [
  {
    num: '01',
    name: '리솜 워터파크',
    desc: '리솜 워터파크의 튜브 이송 컨베이어는 고객들이 탄 튜브를 편리하게 맨 위로 운반해주는 시설입니다.',
    pics: ['/portfolios/first-project/first-project-1.jpg', '/portfolios/first-project/first-project-2.jpg', '/portfolios/first-project/first-project-3.jpg', '/portfolios/first-project/first-project-4.jpg', '/portfolios/first-project/first-project-5.jpg', '/portfolios/first-project/first-project-6.jpg'],
    location: '덕산',
    duration: '60일',
    tags: ['#워터파크 컨베이어', '#덕산 워터파크 컨베이어', '#리솜 워터파크 컨베이어', '#벨트 컨베이어']
  },
  {
    num: '02',
    name: '신화월드',
    desc: '신화월드 제주의 튜브 이송 컨베이어는 워터파크 내에서 고객들이 튜브를 편리하게 맨 위로 운반하는 시설입니다.',
    pics: ['/portfolios/second-project/second-project-1.jpg', '/portfolios/second-project/second-project-2.jpg', '/portfolios/second-project/second-project-3.jpg', '/portfolios/second-project/second-project-4.jpg', '/portfolios/second-project/second-project-5.jpg', '/portfolios/second-project/second-project-6.jpg', '/portfolios/second-project/second-project-7.jpg'],
    location: '제주',
    duration: '100일',
    tags: ['#워터파크 컨베이어', '#제주 워터파크 컨베이어', '#신화월드 워터파크 컨베이어', '#벨트 컨베이어']
  },
  {
    num: '03',
    name: '나라ENG',
    desc: '나라ENG 시화공단의 페유처리 라인 컨베이어는 대량의 원유를 안전하게 운반하고 처리하는 자동화된 시스템입니다.',
    pics: ['/portfolios/third-project/third-project-1.jpg', '/portfolios/third-project/third-project-2.jpg', '/portfolios/third-project/third-project-3.jpg', '/portfolios/third-project/third-project-4.jpg', '/portfolios/third-project/third-project-5.jpg', '/portfolios/third-project/third-project-6.jpg'],
    location: '시화공단',
    duration: '30일',
    tags: ['#체인 컨베이어', '#페유처라인 컨베이어', '#시화공단 컨베이어']
  },
  {
    num: '04',
    name: '미래기술',
    desc: '미래의 토마토 포장 기술에서 사용된 벨트 컨베이어는 자동화된 시스템으로, 토마토를 효율적으로 운송하고 분류하여 포장 과정을 최적화합니다. 효율성과 정확성을 향상시켜 생산성을 높이며, 인력 투입을 줄여 환경적으로 지속 가능한 방식으로 농산물을 처리합니다.',
    pics: ['/portfolios/fourth-project/fourth-project-1.jpg', '/portfolios/fourth-project/fourth-project-2.jpg', '/portfolios/fourth-project/fourth-project-3.jpg', '/portfolios/fourth-project/fourth-project-4.jpg', '/portfolios/fourth-project/fourth-project-5.jpg'],
    location: '금산',
    duration: '30일',
    tags: ['#벨트 컨베이어', '#금산 벨트 컨베이어', '#미래기술 컨베이어', '#토마토 포장 컨베이어', '#토마토 포장 벨트 컨베이어']
  },
  {
    num: '05',
    name: '디씨엠',
    desc: '디씨엠에서 화성에 설치한 이차전지 케이스 연마 라인 컨베이어는 이차전지 제조 프로세스에서 사용됩니다. 이 컨베이어는 이차전지 케이스를 정밀하게 연마하여 표면을 평탄하고 균일하게 마무리합니다. 화성에 설치된 이 시스템은 전지 제조 공정의 자동화와 품질 향상을 실현하며 더 효율적이고 정밀한 제조를 지원합니다.',
    pics: ['/portfolios/fifth-project/fifth-project-1.jpg', '/portfolios/fifth-project/fifth-project-2.jpg', '/portfolios/fifth-project/fifth-project-3.jpg', '/portfolios/fifth-project/fifth-project-4.jpg', '/portfolios/fifth-project/fifth-project-5.jpg', '/portfolios/fifth-project/fifth-project-6.jpg'],
    location: '화성',
    duration: '25일',
    tags: ['#디씨엠 컨베이어', '#2차전지 컨베이어', '#이차전지 컨베이어', '#화성 컨베이어']
  },
  {
    num: '06',
    name: '케코',
    desc: '케코에서 요청한 치즈 생산 라인 컨베이어는 원주에서 제작되었습니다. 이 시스템은 치즈 제조 공정에서 사용되며, 원재료의 이동과 가공 단계 간에 원활한 자동 운송을 제공합니다. 원주에서 제작된 이 컨베이어 시스템은 생산성을 높이고 생산과정을 효율적으로 관리하여 고품질의 치즈 생산을 지원합니다.',
    pics: ['/portfolios/sixth-project/sixth-project-1.jpg', '/portfolios/sixth-project/sixth-project-2.jpg', '/portfolios/sixth-project/sixth-project-3.jpg', '/portfolios/sixth-project/sixth-project-4.jpg', '/portfolios/sixth-project/sixth-project-5.jpg', '/portfolios/sixth-project/sixth-project-6.jpg'],
    location: '원주',
    duration: '20일',
    tags: ['#원주 컨베이어', '#케코 컨베이어', '#치즈 컨베이어', '#치즈 생산라인 컨베이어']
  },
  {
    num: '07',
    name: '하림 닭 공장',
    desc: '하림 닭 공장에서 사용된 컨베이어 시스템은 서울 및 경기 지역의 레드컨베이어에 의해 제작되었습니다. 이 시스템은 닭 처리 및 포장 공정에 최적화되어 있으며, 원료의 이동에서 최종 포장 단계에 이르기까지 원활한 자동 운송을 보장합니다.',
    pics: ['/portfolios/seventh-project/seventh-project-1.jpg', '/portfolios/seventh-project/seventh-project-2.jpg', '/portfolios/seventh-project/seventh-project-3.jpg', '/portfolios/seventh-project/seventh-project-4.jpg', '/portfolios/seventh-project/seventh-project-5.jpg', '/portfolios/seventh-project/seventh-project-6.jpg'],
    location: '익산',
    duration: '60일',
    tags: ['#닭 포장 컨베이어', '#식품 컨베이어', '#박스 운반용 컨베이어', '#벨트 컨베이어']
  },
];

export {
  portfolios
}
