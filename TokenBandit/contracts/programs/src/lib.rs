use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
};

mod constants;
mod state;
mod errors;
mod instructions;

use instructions::{mint_nft::process_mint_nft, snipe_token::process_snipe_token};

// Entry point
entrypoint!(process_instruction);

fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    match instruction_data[0] {
        0 => process_mint_nft(program_id, accounts, instruction_data),
        1 => process_snipe_token(program_id, accounts, instruction_data),
        _ => Err(errors::CustomError::InvalidInstruction.into()),
    }
}
