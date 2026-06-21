// Mock data — replace with real API calls when backend is connected.

export const currentUser = {
  id: 'USR-101',
  name: 'Ramesh Kumar',
  role: 'Field Officer',
  email: 'ramesh.kumar@agrintel.com',
  phone: '+91 98765 43210',
  territory: 'Solapur',
  joined: 'Jan 2024',
  avatar: 'RK',
}

export const villages = [
  { id: 'V1', name: 'Rampur', territory: 'Solapur', mainCrop: 'Wheat, Paddy', farmers: 64, visits: 28 },
  { id: 'V2', name: 'Kalyanwadi', territory: 'Solapur', mainCrop: 'Soybean', farmers: 51, visits: 22 },
  { id: 'V3', name: 'Sihpur', territory: 'Solapur', mainCrop: 'Cotton', farmers: 47, visits: 17 },
  { id: 'V4', name: 'Madhopur', territory: 'Solapur', mainCrop: 'Sugarcane', farmers: 39, visits: 14 },
  { id: 'V5', name: 'Bhagwanpur', territory: 'Solapur', mainCrop: 'Wheat', farmers: 28, visits: 12 },
]

export const farmers = [
  {
    id: 'F1001',
    name: 'Suresh Yadav',
    phone: '9876543210',
    village: 'Rampur',
    landSize: '2 Acre',
    mainCrop: 'Wheat, Paddy',
    irrigation: 'Borewell',
    soilType: 'Loamy',
    farmingType: 'Traditional',
    memberSince: 'Jan 2024',
    lastVisit: '24 May 2025',
    totalVisits: 8,
    pendingFollowUps: 1,
    totalOrders: '₹24,500',
    recentVisits: [
      { date: '24 May 2025', type: 'Field Visit', note: 'Discussed about crop condition and...' },
      { date: '15 May 2025', type: 'Product Demo', note: 'Demo of Product B' },
      { date: '06 May 2025', type: 'Field Visit', note: 'Health check and feedback' },
    ],
  },
  {
    id: 'F1002',
    name: 'Green Agri Store (Dealer)',
    phone: '9876511223',
    village: 'Kalyanwadi',
    landSize: '-',
    mainCrop: '-',
    irrigation: '-',
    soilType: '-',
    farmingType: '-',
    memberSince: 'Mar 2023',
    lastVisit: '23 May 2025',
    totalVisits: 14,
    pendingFollowUps: 0,
    totalOrders: '₹1,12,000',
    recentVisits: [],
  },
  {
    id: 'F1003',
    name: 'Vijay Patil',
    phone: '9822011223',
    village: 'Sihpur',
    landSize: '4 Acre',
    mainCrop: 'Cotton',
    irrigation: 'Canal',
    soilType: 'Black Soil',
    farmingType: 'Mixed',
    memberSince: 'Aug 2024',
    lastVisit: '18 May 2025',
    totalVisits: 5,
    pendingFollowUps: 2,
    totalOrders: '₹9,800',
    recentVisits: [],
  },
]

export const dealers = [
  { id: 'D1', name: 'Green Agri Store', village: 'Kalyanwadi', influence: 'High', sales: '₹1,12,000' },
  { id: 'D2', name: 'Patil Agro Center', village: 'Sihpur', influence: 'Medium', sales: '₹64,200' },
  { id: 'D3', name: 'Krushi Seva Kendra', village: 'Rampur', influence: 'High', sales: '₹88,900' },
]

export const visits = [
  {
    id: 'VS1',
    farmer: 'Suresh Yadav',
    village: 'Rampur',
    date: '24 May 2025',
    time: '10:30 AM',
    type: 'Field Visit',
    purpose: 'Product Promotion',
    notes: 'Discussed about crop condition and product performance. Farmer is satisfied with Product A. Shown interest in Product B for next season.',
    keyPoints: ['Crop: Wheat', 'Land Area: 2 Acre', 'Irrigation: Borewell', 'Current Product: Product A', 'Interested Product: Product B'],
    observations: 'Good crop condition. Need guidance on disease management.',
    officerNotes: 'Will share additional product information.',
    nextFollowUp: '28 May 2025',
    followUpStatus: 'Pending',
  },
  {
    id: 'VS2',
    farmer: 'Green Agri Store',
    village: 'Kalyanwadi',
    date: '24 May 2025',
    time: '2:00 PM',
    type: 'Dealer Visit',
    purpose: 'Demand Check',
    notes: 'Met with dealer to check inventory and demand for Product C.',
    keyPoints: ['Stock: Low', 'Demand: Increasing'],
    observations: 'Dealer requests faster delivery.',
    officerNotes: 'Escalate delivery delay to supply team.',
    nextFollowUp: '02 Jun 2025',
    followUpStatus: 'Pending',
  },
  {
    id: 'VS3',
    farmer: 'Vijay Patil',
    village: 'Sihpur',
    date: '24 May 2025',
    time: '4:15 PM',
    type: 'Demonstration',
    purpose: 'Product Demo',
    notes: 'Conducted product demo at Shivpur village, attendance good.',
    keyPoints: ['Attendees: 18', 'Result: Positive'],
    observations: 'Strong interest in bulk purchase.',
    officerNotes: 'Schedule follow-up demo next month.',
    nextFollowUp: '20 Jun 2025',
    followUpStatus: 'Completed',
  },
]

export const followUps = [
  { id: 'FU1', farmer: 'Suresh Yadav', village: 'Rampur', date: '28 May 2025', reason: 'Interested in Product B for next season', status: 'Pending' },
  { id: 'FU2', farmer: 'Green Agri Store', village: 'Kalyanwadi', date: '02 Jun 2025', reason: 'Delivery delay follow-up', status: 'Pending' },
  { id: 'FU3', farmer: 'Vijay Patil', village: 'Sihpur', date: '20 Jun 2025', reason: 'Bulk purchase discussion', status: 'Completed' },
]

export const products = [
  { id: 'P1', name: 'Product A', category: 'Fertilizer', demandMentions: 45, complaints: 4 },
  { id: 'P2', name: 'Product B', category: 'Pesticide', demandMentions: 32, complaints: 2 },
  { id: 'P3', name: 'Product C', category: 'Seeds', demandMentions: 18, complaints: 6 },
]

export const competitors = [
  { id: 'C1', name: 'ABC Fertilizer', product: 'NPK Mix', observation: 'New discount offer, increased dealer margin, high demand', village: 'Rampur' },
  { id: 'C2', name: 'CropMax', product: 'Hybrid Seeds', observation: 'Aggressive pricing in Sihpur belt', village: 'Sihpur' },
]

export const visitTrend = [
  { day: '1 May', visits: 14 }, { day: '8 May', visits: 22 }, { day: '15 May', visits: 18 },
  { day: '22 May', visits: 30 }, { day: '29 May', visits: 24 },
]

export const villageVisits = [
  { village: 'Rampur', visits: 28 }, { village: 'Kalyanwadi', visits: 22 },
  { village: 'Sihpur', visits: 17 }, { village: 'Madhopur', visits: 14 }, { village: 'Bhagwanpur', visits: 12 },
]

export const demandTrend = [
  { month: '1 May', ProductA: 20, ProductB: 14, ProductC: 8 },
  { month: '8 May', ProductA: 26, ProductB: 18, ProductC: 10 },
  { month: '15 May', ProductA: 30, ProductB: 22, ProductC: 13 },
  { month: '22 May', ProductA: 38, ProductB: 28, ProductC: 16 },
  { month: '29 May', ProductA: 45, ProductB: 32, ProductC: 18 },
]

export const topComplaints = [
  { reason: 'Low Yield', count: 12 }, { reason: 'Price Issue', count: 8 },
  { reason: 'Delivery Delay', count: 6 }, { reason: 'Quality Issue', count: 3 }, { reason: 'Others', count: 2 },
]

export const followUpStatusSplit = [
  { name: 'Pending', value: 10 }, { name: 'Completed', value: 5 }, { name: 'Overdue', value: 3 },
]

export const recentActivities = [
  { text: 'Visited farmer Suresh Yadav — Rampur Village', time: '2hr ago' },
  { text: 'Met with dealer Green Agri Store — Kalyanwadi', time: '4hr ago' },
  { text: 'Product demo at Shivpur Village', time: '5hr ago' },
]

export const summary = {
  totalVisits: 128, visitsGrowth: '+12%',
  totalFarmers: 256, farmersGrowth: '+8%',
  totalDealers: 34, dealersGrowth: '+5%',
  pendingFollowUps: 18, followUpsGrowth: '-10%',
}
