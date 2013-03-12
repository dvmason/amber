smalltalk.addPackage('Helios-Environments');
smalltalk.addClass('HLEnvironment', smalltalk.Object, [], 'Helios-Environments');
smalltalk.addMethod(
"_addInstVarNamed_to_",
smalltalk.method({
selector: "addInstVarNamed:to:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(aClass)._instanceVariableNames())._copy();
_st($1)._add_(aString);
$2=_st($1)._yourself();
_st(_st(self)._classBuilder())._addSubclassOf_named_instanceVariableNames_package_(_st(aClass)._superclass(),_st(aClass)._name(),$2,_st(_st(aClass)._package())._name());
return self}, function($ctx1) {$ctx1.fill(self,"addInstVarNamed:to:",{aString:aString,aClass:aClass}, smalltalk.HLEnvironment)})},
messageSends: ["addSubclassOf:named:instanceVariableNames:package:", "superclass", "name", "add:", "copy", "instanceVariableNames", "yourself", "package", "classBuilder"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_availableClassNames",
smalltalk.method({
selector: "availableClassNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_availableProtocolsFor_",
smalltalk.method({
selector: "availableProtocolsFor:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_classBuilder",
smalltalk.method({
selector: "classBuilder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{}, smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_compileClassComment_for_",
smalltalk.method({
selector: "compileClassComment:for:",
fn: function (aString,aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"compileClassComment:for:",{aString:aString,aClass:aClass}, smalltalk.HLEnvironment)})},
messageSends: ["comment:"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_compileClassDefinition_",
smalltalk.method({
selector: "compileClassDefinition:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"compileClassDefinition:",{aString:aString}, smalltalk.HLEnvironment)})},
messageSends: ["eval:on:", "new"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_compileMethod_for_protocol_",
smalltalk.method({
selector: "compileMethod:for:protocol:",
fn: function (sourceCode,class_,protocol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"compileMethod:for:protocol:",{sourceCode:sourceCode,class_:class_,protocol:protocol}, smalltalk.HLEnvironment)})},
messageSends: ["compile:category:"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver}, smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_moveMethod_toClass_",
smalltalk.method({
selector: "moveMethod:toClass:",
fn: function (aMethod,aClassName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName},smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLEnvironment)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.HLEnvironment);



smalltalk.addClass('HLLocalEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
"_availableClassNames",
smalltalk.method({
selector: "availableClassNames",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._classes())._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"availableClassNames",{},smalltalk.HLLocalEnvironment)})},
messageSends: ["collect:", "name", "classes", "current"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_availableProtocolsFor_",
smalltalk.method({
selector: "availableProtocolsFor:",
fn: function (aClass){
var self=this;
var protocols;
return smalltalk.withContext(function($ctx1) { 
protocols=_st(aClass)._protocols();
$1=_st(aClass)._superclass();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(protocols)._addAll_(_st(self)._availableProtocolsFor_(_st(aClass)._superclass()));
};
$2=_st(_st(protocols)._asSet())._asArray();
return $2;
}, function($ctx1) {$ctx1.fill(self,"availableProtocolsFor:",{aClass:aClass,protocols:protocols},smalltalk.HLLocalEnvironment)})},
messageSends: ["protocols", "ifNotNil:", "addAll:", "availableProtocolsFor:", "superclass", "asArray", "asSet"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_classBuilder",
smalltalk.method({
selector: "classBuilder",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.ClassBuilder || ClassBuilder))._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"classBuilder",{}, smalltalk.HLLocalEnvironment)})},
messageSends: ["new"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
fn: function (aString,aReceiver){
var self=this;
var compiler;
return smalltalk.withContext(function($ctx1) { 
var $early={};
try {
compiler=_st((smalltalk.Compiler || Compiler))._new();
_st((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.Error || Error),(function(ex){
return smalltalk.withContext(function($ctx2) {
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({ex:ex},$ctx1)})}));
$2=_st(compiler)._evaluateExpression_on_(aString,aReceiver);
return $2;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"eval:on:",{aString:aString,aReceiver:aReceiver,compiler:compiler}, smalltalk.HLLocalEnvironment)})},
messageSends: ["new", "on:do:", "alert:", "messageText", "parseExpression:", "evaluateExpression:on:"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_moveMethod_toClass_",
smalltalk.method({
selector: "moveMethod:toClass:",
fn: function (aMethod,aClassName){
var self=this;
var destinationClass;
return smalltalk.withContext(function($ctx1) { 
destinationClass=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(_st(aClassName)._asSymbol());
$1=destinationClass;
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._error_("Invalid class name");
} else {
$1;
};
$2=_st(destinationClass).__eq_eq(_st(aMethod)._methodClass());
if(smalltalk.assert($2)){
$3=self;
return $3;
};
_st(destinationClass)._adoptMethod_(aMethod);
_st(_st(aMethod)._methodClass())._forsakeMethod_(aMethod);
return self}, function($ctx1) {$ctx1.fill(self,"moveMethod:toClass:",{aMethod:aMethod,aClassName:aClassName,destinationClass:destinationClass},smalltalk.HLLocalEnvironment)})},
messageSends: ["at:", "asSymbol", "current", "ifNil:", "error:", "ifTrue:", "==", "methodClass", "adoptMethod:", "forsakeMethod:"]}),
smalltalk.HLLocalEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._packages();
return $1;
}, function($ctx1) {$ctx1.fill(self,"packages",{}, smalltalk.HLLocalEnvironment)})},
messageSends: ["packages", "current"]}),
smalltalk.HLLocalEnvironment);



smalltalk.addClass('HLRemoteEnvironment', smalltalk.HLEnvironment, [], 'Helios-Environments');
smalltalk.addMethod(
"_eval_on_",
smalltalk.method({
selector: "eval:on:",
fn: function (someCode,aReceiver){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"eval:on:",{someCode:someCode,aReceiver:aReceiver}, smalltalk.HLRemoteEnvironment)})},
messageSends: ["notYetImplemented"]}),
smalltalk.HLRemoteEnvironment);

smalltalk.addMethod(
"_packages",
smalltalk.method({
selector: "packages",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLRemoteEnvironment);



smalltalk.addClass('HLRemoteObject', smalltalk.Object, [], 'Helios-Environments');
smalltalk.addMethod(
"_doesNotUnderstand_",
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
"_inspectOn_",
smalltalk.method({
selector: "inspectOn:",
fn: function (anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLRemoteObject);

smalltalk.addMethod(
"_printString",
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"printString",{}, smalltalk.HLRemoteObject)})},
messageSends: []}),
smalltalk.HLRemoteObject);



smalltalk.addMethod(
"_adoptMethod_",
smalltalk.method({
selector: "adoptMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"adoptMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: ["compile:category:", "source", "protocol"]}),
smalltalk.Behavior);

smalltalk.addMethod(
"_forsakeMethod_",
smalltalk.method({
selector: "forsakeMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"forsakeMethod:",{aMethod:aMethod},smalltalk.Behavior)})},
messageSends: ["removeCompiledMethod:"]}),
smalltalk.Behavior);
