#!/bin/bash

echo "### Test Target Menu."
echo "=============================================================================================================================================================="
echo "[Target : Web] 웹 브라우져 테스트"
echo "[Target : App] 앱 테스트"
echo "--------------------------------------------------------------------------------------------------------------------------------------------------------------"
echo "Please enter the Test Target :  (ex. Web  or  App)"
read TEST_TARGET_MENU
echo "=============================================================================================================================================================="

SCENARIO_TITLE=null
TESTMODE=null

if [ ${TEST_TARGET_MENU} == "Web" ]; then
    echo "### Scenario Menu."
    echo "=============================================================================================================================================================="
    echo "[Title: WebRestaurantListTestScenario] 식당 리스트 기능 테스트 시나리오"
    echo "[Title: Exit] 테스트 자동화 종료"
    echo "[Title: TestMode] 테스트 개발 모드 (저장 코드 자동 실행)"
    echo "--------------------------------------------------------------------------------------------------------------------------------------------------------------"
    echo "Please enter the Title :  (ex. TestMode)"
    read TEST_SCENARIO_TITLE
    echo "=============================================================================================================================================================="
    SCENARIO_TITLE="${TEST_SCENARIO_TITLE}"
else
    echo "### Scenario Menu."
    echo "=============================================================================================================================================================="
    echo "[Title: AppRestaurantListTestScenario] 식당 리스트 기능 테스트 시나리오"
    echo "[Title: Exit] 테스트 자동화 종료"
    echo "[Title: TestMode] 테스트 개발 모드 (저장 코드 자동 실행)"
    echo "--------------------------------------------------------------------------------------------------------------------------------------------------------------"
    echo "Please enter the Title :  (ex. TestMode)"
    read TEST_SCENARIO_TITLE
    echo "=============================================================================================================================================================="
    SCENARIO_TITLE="${TEST_SCENARIO_TITLE}"
fi

if [ ${SCENARIO_TITLE} == "TestMode" ]; then
    echo "### TEST MODE"
    echo "### TEST MODE] Please enter the Title :  (ex. TestMode)"
    read TEST_SCENARIO_TITLE
    echo "=============================================================================================================================================================="
    SCENARIO_TITLE="${TEST_SCENARIO_TITLE}"
    TESTMODE="TestMode"
fi

if [ ${TESTMODE} == "TestMode" ]; then
    echo "### TESTMODE] Title : $SCENARIO_TITLE"
    npm run test $TEST_TARGET_MENU $SCENARIO_TITLE
else
    echo "### STARTUP] Title : $SCENARIO_TITLE"
    npm run startup $TEST_TARGET_MENU $SCENARIO_TITLE
fi


