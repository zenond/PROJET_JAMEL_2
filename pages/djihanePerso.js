function Balancesheet()
{
	$('.ShowBalanceSheet').show();
	$('.ShowAgents').hide();
	
	$('.ShowGraph').hide();
}

function Agents()
{
	$('.ShowBalanceSheet').hide();
	$('.ShowGraph').hide();
	$('.ShowAgents').show();
	
}

function Graphisme()
{
	$('.ShowGraph').show();
	$('.ShowAgents').hide();
	
	$('.ShowBalanceSheet').hide();	
}



$(document).ready(function()
	{
		
		$('.ShowAgents').show();
		$('.ShowBalanceSheet').hide();
		$('.ShowGraph').hide();
	

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
				
			});

//*********************************************************************
		


		
	});