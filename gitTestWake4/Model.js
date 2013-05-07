
guidedModel =// @startlock
{
	Person :
	{
		name :
		{
			events :
			{
				onInit:function(attributeName)
				{// @endlock
					this = "John Doe or Jan Doe";
				}// @startlock
			}
		}
	}
};// @endlock
