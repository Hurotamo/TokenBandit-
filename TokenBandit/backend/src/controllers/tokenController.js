const solanaService = require('../services/solanaService');

exports.snipeToken = async (req, res) => {
  try {
    const { walletAddress, tokenAddress } = req.body;
    const transactionHash = await solanaService.snipeToken(walletAddress, tokenAddress);
    res.status(200).json({ success: true, transactionHash });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
