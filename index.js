module.exports = (req, res) => {
  res.status(200).json({
    message: 'Hello from Vercel!',
    time: new Date().toISOString(),
    status: 'working'
  });
}; 