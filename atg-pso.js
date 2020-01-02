angular.module('myApp', ['ngClipboard']).controller('userCtrl', ['$scope','$window','ngClipboard','$http', function($scope, $window, ngClipboard,$http) {
$scope.personas = 'aux02';
$scope.environments = '';
$scope.linkType = '';
$scope.envId='';
$scope.persId='aux02';
$scope.postString='';
$scope.port=8090;
$scope.finalLink = "";
$scope.onPrem = "";
$scope.puttytext =true;


$scope.envs = [
{id:1, environments:"B&Q F Tier", envId:"asitbquk", postString:".aws.gha.kfplc.com",opco:"BQ", aws:"Y", afaGenericLink:"https://asitbquk-afa.ecommnp.kd.kfplc.com/agent-front/",webGenericLink:"https://asitbquk-storefront.ecommnp.kd.kfplc.com/"},
{id:2, environments:"BDFR F Tier", envId:"asitbdfr", postString:".aws.gha.kfplc.com",opco:"BD", aws:"Y", afaGenericLink:"https://asitbdfr-afa.ecommnp.kd.kfplc.com/agent-front/",webGenericLink:"https://asitcafr-storefront.ecommnp.kd.kfplc.com/"},
{id:3, environments:"CAPL F Tier", envId:"asitcapl", postString:".aws.gha.kfplc.com",opco:"PL", aws:"Y", afaGenericLink:"https://asitcapl-afa.ecommnp.kd.kfplc.com/agent-front/",webGenericLink:"https://asitbdfr-storefront.ecommnp.kd.kfplc.com/"},
{id:4, environments:"CAFR F Tier", envId:"asitcafr", postString:".aws.gha.kfplc.com",opco:"FR", aws:"Y", afaGenericLink:"https://asitcafr-afa.ecommnp.kd.kfplc.com/agent-front/",webGenericLink:"https://asitcapl-storefront.ecommnp.kd.kfplc.com/"},
{id:5, environments:"B&Q V Tier" , envId:"pvtbquk", postString:".ghanp.kfplc.com",opco:"BQ", aws:"N", afaGenericLink:"https://pvt11-agent.diy.com/agent-front/",webGenericLink:"https://pvt11-storefront.diy.com/"},
{id:6, environments:"CAFR V Tier ATG 11" , envId:"pvtcafr", postString:".ghanp.kfplc.com",opco:"FR" , aws:"N", afaGenericLink:"https://pvt11-agent.castorama.fr/agent-front/",webGenericLink:"https://pvt11-storefront.castorama.fr/"},
{id:7, environments:"CAFR V Tier ATG 10" , envId:"frca-pvt", postString:".ghanp.kfplc.com",opco:"FR" , aws:"N", afaGenericLink:"https://pvt-agent.castorama.fr/agent-front/ ",webGenericLink:"http://pvt-storefront.castorama.fr"},
{id:8, environments:"BDFR V Tier" , envId:"pvtbdfr", postString:".ghanp.kfplc.com",opco:"BD" , aws:"N", afaGenericLink:"https://pvt11-agent.bricodepot.fr/agent-front",webGenericLink:"https://pvt11-storefront.bricodepot.fr/"},
{id:9, environments:"CAPL V Tier" , envId:"pvtcapl", postString:".ghanp.kfplc.com",opco:"PL" , aws:"N", afaGenericLink:"https://pft11-agent.castorama.pl/agent-front/",webGenericLink:"https://pft11-storefront.castorama.pl/"},
{id:10, environments:"B&Q Q Tier", envId:"pftbquk", postString:".ghanp.kfplc.com" ,opco:"BQ", aws:"N", afaGenericLink:"https://pft-agent.uk.b-and-q.com/agent-front/",webGenericLink:"https://pft11-storefront.castorama.fr/"},
{id:11, environments:"CAFR Q Tier ATG 10" , envId:"frca-pft", postString:".ghanp.kfplc.com",opco:"FR", aws:"N", afaGenericLink:"https://pft11-agent.castorama.fr/agent-front/",webGenericLink:"https://pft11-storefront.castorama.fr/"},
{id:12, environments:"CAFR Q Tier ATG 11", envId:"pftcafr", postString:".ghanp.kfplc.com" ,opco:"FR", aws:"N", afaGenericLink:"https://pft11-agent.castorama.fr/agent-front/",webGenericLink:"https://pft-storefront.castorama.fr/"},
{id:13, environments:"BDFR Q Tier" , envId:"pftbdfr", postString:".ghanp.kfplc.com",opco:"BD" , aws:"N", afaGenericLink:"https://pft11-agent.bricodepot.fr/agent-front/",webGenericLink:"https://pft11-storefront.bricodepot.fr/"},
{id:14, environments:"CAPL Q Tier" , envId:"pftcapl", postString:".ghanp.kfplc.com",opco:"PL" , aws:"N", afaGenericLink:"https://pft11-agent.castorama.pl/agent-front/",webGenericLink:"https://pvt11-storefront.castorama.pl/"},
{id:15, environments:"B&Q S/D Tier", envId:"sit", postString:".uk.b-and-q.com" ,opco:"BQ", aws:"N", afaGenericLink:"",webGenericLink:""},
{id:16, environments:"B&Q H tier" , envId:"ahftbquk", postString:".aws.ghanp.kfplc.com",opco:"BQ" , aws:"Y", afaGenericLink:"http://ahftbquk-afa.aws.ghanp.kfplc.com/agent-front/",webGenericLink:"https://ahftbquk-storefront.aws.ghanp.kfplc.com/"},
{id:17, environments:"CAFR H tier" , envId:"ahftcafr", postString:".aws.ghanp.kfplc.com",opco:"FR" , aws:"Y", afaGenericLink:"http://ahftcafr-afa.aws.ghanp.kfplc.com/agent-front/",webGenericLink:"https://ahftcafr-storefront.aws.ghanp.kfplc.com/"}
];

$scope.links = [
{id:0, linkType:"PSO"},
{id:1, linkType:"PSO XML RESEND"},
{id:2, linkType:"POS BASKET XML RESEND"},
{id:3, linkType:"POS REFUND XML RESEND"},
{id:4, linkType:"IIB CONNECTION"},
{id:5, linkType:"MFT SERVER"},
{id:6, linkType:".COM+" },
{id:7, linkType:"DIY"}
];

$scope.prepareLink = function(id1,id2) {
	
	//console.log(id1+" "+id2)
	$scope.puttytext =true;
	$scope.persId = 'aux02' ;
	$scope.onPrem = "-ndc-" ;
	if ($scope.envs[id1-1].aws == "Y") {
		
		$scope.onPrem = "-aws-" ;
	}

	if ($scope.links[id2].linkType == "PSO") {
		$scope.finalLink = "http://atg-"+$scope.envs[id1-1].envId+$scope.onPrem+$scope.persId+$scope.envs[id1-1].postString+":"+$scope.port+"/dyn/admin/nucleus//kf/commerce/order/PrintChangeSalesOrderService/";
	}		
	if ($scope.links[id2].linkType == "PSO XML RESEND") {
		
		$scope.finalLink = "http://atg-"+$scope.envs[id1-1].envId+$scope.onPrem+$scope.persId+$scope.envs[id1-1].postString+":"+$scope.port+"/dyn/admin/nucleus//kf/commerce/fulfillment/processor/SalesOrderService/";
	}
	if ($scope.links[id2].linkType == "POS BASKET XML RESEND") {
		
		$scope.finalLink = "http://atg-"+$scope.envs[id1-1].envId+$scope.onPrem+$scope.persId+$scope.envs[id1-1].postString+":"+$scope.port+"/dyn/admin/nucleus//kf/commerce/fulfillment/processor/SalesPosBasketService/";
	}
	if ($scope.links[id2].linkType == "POS REFUND XML RESEND") {
		
		$scope.finalLink = "http://atg-"+$scope.envs[id1-1].envId+$scope.onPrem+$scope.persId+$scope.envs[id1-1].postString+":"+$scope.port+"/dyn/admin/nucleus//kf/commerce/fulfillment/processor/SalesPosBasketForRefundService/";
	}

	if ($scope.links[id2].linkType == "IIB CONNECTION") {

		$scope.finalLink = "http://atg-"+$scope.envs[id1-1].envId+$scope.onPrem+$scope.persId+$scope.envs[id1-1].postString+":"+$scope.port+"/dyn/admin/nucleus//kf/messaging/connection/ConnectionConfiguration/";

	}
	
	if ($scope.links[id2].linkType == "MFT SERVER") {
		
				$scope.persId = 'aux01' ;
				$scope.finalLink = "C:\\Program Files\\PuTTY\\putty.exe -ssh atg-"+$scope.envs[id1-1].envId+$scope.onPrem+$scope.persId+$scope.envs[id1-1].postString;
				ngClipboard.toClipboard($scope.finalLink);
				$scope.puttytext = false ;
		
	}

	if ($scope.links[id2].linkType == ".COM+") {
	
		$scope.finalLink = $scope.envs[id1-1].afaGenericLink
	}
	if ($scope.links[id2].linkType == "DIY") {
	
		$scope.finalLink = $scope.envs[id1-1].webGenericLink
	}
	
	if ($scope.links[id2].linkType != "MFT SERVER") {
		$window.open($scope.finalLink);
	}
	
};

}]);
