use borsh::{BorshDeserialize, BorshSerialize};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct NftMetadata {
    pub name: String,
    pub symbol: String,
    pub uri: String,
}

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct UserAccount {
    pub owner: [u8; 32],
    pub balance: u64,
}
