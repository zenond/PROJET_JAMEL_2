var IsClicked=false; 

function Balancesheet()
{
	$('.ShowBalanceSheet').show();
	$('.ShowAgents').hide();
	$('.ShowChoosedAgents').hide();
	$('.ShowGraph').hide();
}

function Agents()
{
	$('.ShowBalanceSheet').hide();
	$('.ShowGraph').hide();
	if (IsClicked === false) 
	{
		$('.ShowAgents').show();
	}
	else
	{
		$('.ShowChoosedAgents').show();
	}
}

function Graphisme()
{
	$('.ShowGraph').show();
	$('.ShowAgents').hide();
	$('.ShowChoosedAgents').hide();
	$('.ShowBalanceSheet').hide();	
}



$(document).ready(function()
	{
		
		$('.ShowAgents').show();
		$('.ShowBalanceSheet').hide();
		$('.ShowGraph').hide();
		$('.ShowChoosedAgents').hide();

		$('.ISstopped').on('click', function()
		{
			IsClicked=false;
		});
		
		$('.balanceSheet').on('click' , function()
			{
				Balancesheet();
			});
		$('.AgentEconomic').on('click' , function()
			{
				Agents();
			});
		$('.Graphs').on('click' , function()
			{
				Graphisme();
			});
		$('.Validated').on('click' , function()
			{
				Graphisme();
				IsClicked=true;
			});

//*********************************************************************
		


		
	});