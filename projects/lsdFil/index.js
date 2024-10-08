const MINT_TOKEN_CONTRACT = '0xcE5805CF6C84F71D2897f632E0Aa60d2430cCd2A';
const MINT_CLUB_BOND_CONTRACT = '0x7187b3B1314375909B775d72fB7214Cb71a7D907';


async function tvl(_, _1, _2, { api }) {
  const collateralBalance = await api.call({
    abi: 'erc20:balanceOf',
    target: MINT_TOKEN_CONTRACT,
    params: [MINT_CLUB_BOND_CONTRACT],
  });

  api.add(MINT_TOKEN_CONTRACT, collateralBalance)
}

module.exports = {
  timetravel: true,
  misrepresentedTokens: false,
  methodology: 'counts the number of MINT tokens in the Club Bonding contract.',
  filecoin: {
    tvl,
  }
}; 