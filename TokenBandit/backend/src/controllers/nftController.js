const solanaService = require('../services/solanaService');

exports.mintNFT = async (req, res) => {
  try {
    const { walletAddress, metadata } = req.body;
    const transactionHash = await solanaService.mintNFT(walletAddress, metadata);
    res.status(200).json({ success: true, transactionHash });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
