use solana_program::program_error::ProgramError;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum CustomError {
    #[error("Invalid instruction")]
    InvalidInstruction,

    #[error("Account does not have enough balance")]
    InsufficientBalance,
}

impl From<CustomError> for ProgramError {
    fn from(e: CustomError) -> Self {
        ProgramError::Custom(e as u32)
    }
}
